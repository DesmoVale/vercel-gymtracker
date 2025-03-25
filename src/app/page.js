'use client';

import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Parte Sinistra (solo per desktop) */}
      <div className="hidden md:flex flex-1 flex-col justify-center items-center bg-white p-10 shadow-xl">
        <h1 className="text-4xl font-bold text-black transition-transform transform hover:scale-105">
          GymTracker
        </h1>
        <p className="text-gray-600 text-center mt-3 transition-opacity opacity-75 hover:opacity-100">
          Monitora i tuoi allenamenti e raggiungi i tuoi obiettivi.
        </p>
      </div>

      {/* Parte Destra (Login Form) */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md transform transition-transform hover:scale-105">
          
          {/* Titolo con Header per mobile */}
          <div className="md:hidden w-full bg-black text-white p-4 text-center rounded-t-xl mb-6">
            <h1 className="text-3xl font-bold">
              GymTracker
            </h1>
          </div>

          {/* Form di login */}
          <h2 className="text-2xl font-bold text-center mb-6 text-black">
            Accedi
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all"
            >
              Login
            </button>
          </form>

          {/* Registrazione */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">Nuovo su GymTracker?</p>
            <div className="flex flex-col space-y-4 mt-4">
              <Link href="/registration/ginnasta">
                <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-all">
                  Registrati come Ginnasta
                </button>
              </Link>
              <Link href="/registration/tecnico">
                <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-all">
                  Registrati come Tecnico
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-5 w-full text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} GymTracker. Tutti i diritti riservati.
      </footer>
    </div>
  );
}
