"use client";

import { useState, use } from "react";
import "./Registration.css"; // Importa il file CSS

export default function Registration({ params }) {

    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dataNascita, setDataNascita] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");

    const unwrappedParams = use(params);  
    const ruolo = unwrappedParams.userType;
  
    const [message, setMessage] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Chiama la funzione Server Action per la registrazione
        const result = await registrazioneUtente(ruolo, nome, cognome, username, password, dataNascita, telefono, email);
        
        // Mostra il messaggio di successo
        setMessage(result.message);
      } catch (error) {
        setMessage(error.message);  // Mostra l'errore
      }
    };


    return (
        <div id="home-container">
            <div className="left-side">
                <h1 className="site-title">GymTracker</h1>
                <p className="subtitle">Monitora i tuoi allenamenti e raggiungi i tuoi obiettivi.</p>
            </div>

            <div className="right-side">
                <div className="login-form">
                    <h2>Registrazione {ruolo}</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="nome" value={nome} placeholder="Nome" onChange={(e) => setNome(e.target.value)} required />
                        <input type="text" name="cognome" value={cognome} placeholder="Cognome" onChange={(e) => setCognome(e.target.value)} required />
                        <input type="date" name="data_nascita" value={dataNascita} onChange={(e) => setDataNascita(e.target.value)} required />
                        <input type="text" name="telefono" value={telefono} placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)} required />
                        <input type="email" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        <input type="text" name="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                        <input type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit">Registra</button>
                    </form>
                </div>
            </div>

            <footer>
                © {new Date().getFullYear()} GymTracker. Tutti i diritti riservati.
            </footer>
        </div>
    );
};