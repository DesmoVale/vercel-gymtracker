"use server";

import bcrypt from "bcrypt";
import { createClient } from "@supabase/supabase-js";
require("dotenv").config();

// Inizializza il client di Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Funzione di registrazione utente
export async function registrazioneUtente(ruolo, nome, cognome, username, password, data_nascita, telefono, email) {
  try {
    // Verifica se l'utente esiste già tramite email o username
    const { data: existingUser, error: checkError } = await supabase
      .from("utente")
      .select("*")
      .or(`username.eq.${username},email.eq.${email}`)
      .single();  // Restituisce solo il primo risultato che corrisponde

    if (existingUser) {
      throw new Error("Username o email già in uso");
    }

    // Hash della password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Salva l'utente nel database
    const { data, error } = await supabase
      .from("utente")
      .insert([
        {
          nome,
          cognome,
          username,
          password: hashedPassword,
          ruolo,
          data_nascita,
          telefono,
          email
        }
      ])
      .select();  // Restituisce i dati dell'utente appena creato

    if (error) {
      throw new Error("Errore durante la registrazione: " + error.message);
    }

    // Restituisce un messaggio di successo e l'utente appena creato
    return { message: `${ruolo} registrato con successo`, user: data[0] };
  } catch (error) {
    console.error(error);
    throw new Error("Errore durante la registrazione");
  }
}
