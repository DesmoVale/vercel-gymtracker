"use client";  // Necessario per il Client Component

import { useState, useEffect } from "react";
import { selectUtente } from "../actions";  // Importa la funzione che hai creato

export default function UserList() {
  const [utenti, setUtenti] = useState([]);

  useEffect(() => {
    async function fetchUtenti() {
      const data = await selectUtente();  // Chiama la Server Action
      setUtenti(data);  // Imposta gli utenti nel componente
    }
    fetchUtenti();
  }, []);  // Il useEffect si esegue una sola volta al montaggio

  return (
    <div>
      <h1>Lista Utenti</h1>
      <ul>
        {utenti.map((utente) => (
          <li key={utente.id}>{utente.nome}</li>  // Sostituisci "nome" con il campo che desideri
        ))}
      </ul>
    </div>
  );
}
