import "./Registration.css"; // Importa il file CSS
import { test } from "../actions";
export default function Registration({ params }) {

    const ruolo = params.userType;

    return (
        <div id="home-container">
            <div className="left-side">
                <h1 className="site-title">GymTracker</h1>
                <p className="subtitle">Monitora i tuoi allenamenti e raggiungi i tuoi obiettivi.</p>
            </div>

            <div className="right-side">
                <div className="login-form">
                    <h2>Registrazione {ruolo}</h2>
                    <form>
                        <input type="text" name="nome" placeholder="Nome" required />
                        <input type="text" name="cognome" placeholder="Cognome" required />
                        <input type="date" name="data_nascita" required />
                        <input type="text" name="telefono" placeholder="Telefono" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="text" name="username" placeholder="Username" required />
                        <input type="password" name="password" placeholder="Password" required />
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