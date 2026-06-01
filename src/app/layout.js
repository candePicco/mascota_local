"use client";

import "./globals.css";
import Link from 'next/link';
import { useState } from 'react';

export default function RootLayout({ children }) {
  // Simulación de estado de usuario por ahora
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userName, setUserName] = useState("Lucila");

  return (
    <html lang="es">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        
        {/* Navbar */}
        <nav className="bg-white shadow-sm p-4 flex justify-between items-center border-b sticky top-0 z-50">
          {/* Logo */}
          <Link href="/" className="text-xl font-black text-orange-600 flex items-center gap-1 transition-transform hover:scale-105">
            🐾 MascotaLocal
          </Link>
          
          {/* Enlaces de Navegación */}
          <div className="flex items-center space-x-5 font-bold text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-500 transition-colors">Inicio</Link>
            <Link href="/perdidas" className="hover:text-orange-500 transition-colors">Perdidas</Link>
            <Link href="/encontradas" className="hover:text-orange-500 transition-colors">Encontradas</Link>
            <Link href="/adopciones" className="hover:text-orange-500 transition-colors">Adopciones</Link>
            <Link href="/reportar" className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full hover:bg-orange-500 hover:text-white transition-all">
              + Reportar
            </Link>
            
            <span className="text-gray-300 font-normal">|</span>

            {/* Condicional de Autenticación */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-800 font-semibold text-xs bg-orange-100 px-3 py-1 rounded-full">
                  Hola, {userName} 👋
                </span>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="text-xs font-bold text-red-500 hover:text-red-700 transition-colors"
                >
                  Salir
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link 
                  href="/login" 
                  className="hover:text-orange-500 font-bold transition-colors"
                >
                  Ingresar
                </Link>
                <Link 
                  href="/register" 
                  className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all shadow-sm"
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Contenido de la página */}
        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="p-8 bg-gray-800 text-white text-center">
          <p>© 2026 MascotaLocal - TP 1 - Programación 3</p>
        </footer>
      </body>
    </html>
  );
}