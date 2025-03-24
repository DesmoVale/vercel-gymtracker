import './page.css';
import Link from 'next/link';

export default function Login() {

    return (
        <div id="home-container">
            <div className="left-side">
                <h1 className="site-title">GymTracker</h1>
                <p className="subtitle">Monitora i tuoi allenamenti e raggiungi i tuoi obiettivi.</p>
            </div>

            <div className="right-side">
                <div className="login-form">
                    <h2>Accedi</h2>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <button type="submit">Login</button>
                    </form>
                    <div className="register-section">
                        <p>Nuovo su GymTracker?</p>
                        <div className="register-buttons">
                            <Link href="/registration/ginnasta"><button>Registrati come Ginnasta</button></Link>
                            <Link href="/registration/tecnico"><button>Registrati come Tecnico</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                © {new Date().getFullYear()} GymTracker. Tutti i diritti riservati.
            </footer>
        </div>
    );
}