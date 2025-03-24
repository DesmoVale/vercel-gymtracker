"use server";
import { createClient } from "@supabase/supabase-js";

// Inizializza il client di Supabase con le chiavi
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Usa la service role key per operazioni sicure
);

export async function selectUtente() {
  const { data, error } = await supabase
    .from("utente")  // Nome della tabella
    .select("*");    // Seleziona tutte le colonne

  if (error) {
    throw new Error(error.message);  // Gestisce eventuali errori
  }

  return data;  // Restituisce i dati ottenuti dalla tabella "utente"
}

