'use client';

import { useState } from 'react';
import { Home, Users, Dumbbell, Calendar as CalendarIcon, Settings, LogOut, Menu } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const [workouts] = useState([
    { id: 1, name: 'Simone Houriya', workout: 'Cavallo, Parallele, Sbarra', time: '18:00' },
    { id: 2, name: 'Valerio Leone', workout: 'Anelli, Parallele, Sbarra', time: '17:00' },
  ]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-black p-5 shadow-xl transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:flex md:flex-col justify-between transition-transform duration-300`}
      >
        <nav className="space-y-4">
          <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-all">
            <Home /> <span>Dashboard</span>
          </button>
          <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-all">
            <Users /> <span>Atleti</span>
          </button>
          <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-all">
            <Dumbbell /> <span>Esercizi</span>
          </button>
          <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-all">
            <CalendarIcon /> <span>Calendario</span>
          </button>
        </nav>
        <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-all">
          <Settings /> <span>Impostazioni</span>
        </button>
      </aside>

      {/* Overlay per mobile */}
      {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden" onClick={() => setSidebarOpen(false)}></div>}

      {/* Main Content */}
      <main className="flex-1 p-5">
        {/* Header con pulsante menu */}
        <header className="flex justify-between items-center bg-black p-4 shadow-xl rounded-lg">
          <div className="flex items-center space-x-3">
            <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="text-gray-700" />
            </button>
            <h1 className="text-xl font-bold text-white">GymTracker</h1>
          </div>
          <button className="flex items-center space-x-2 text-red-500 hover:text-red-700 transition-all">
            <LogOut /> <span>Esci</span>
          </button>
        </header>

        {/* Main Dashboard */}
        <div className="mt-5 space-y-5">
          {/* Top Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-black text-white p-5 rounded-lg shadow-xl cursor-pointer hover:bg-gray-200 hover:text-black transition-all">Gestione Atleti</div>
            <div className="bg-black text-white p-5 rounded-lg shadow-xl cursor-pointer hover:bg-gray-200 hover:text-black transition-all">Gestione Esercizi</div>
            <div className="bg-black text-white p-5 rounded-lg shadow-xl cursor-pointer hover:bg-gray-200 hover:text-black transition-all">Gestione Gare</div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Workout List */}
            <div className="bg-white p-5 rounded-lg shadow-xl">
              <h2 className="font-bold mb-3 text-black">Allenamenti del giorno</h2>
              <div className="space-y-3">
                {workouts.map((workout) => (
                  <div key={workout.id} className="p-3 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
                    <p className="font-semibold">{workout.name}</p>
                    <p className="text-sm text-gray-600">{workout.workout} - {workout.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-white p-5 rounded-lg shadow-xl">
              <h2 className="font-bold mb-3 text-black">Calendario</h2>
              <Calendar 
                onChange={setDate} 
                value={date} 
                className="w-full max-w-xs mx-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
