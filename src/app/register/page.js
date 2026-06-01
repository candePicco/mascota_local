"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación del registro por ahora
    alert(`Usuario registrado:\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}`);
  };

  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        
        {/* Encabezado */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">
            Crear una <span className="text-orange-500">Cuenta</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            ¿Ya tenés cuenta?{' '}
            <Link href="/login" className="font-medium text-orange-600 hover:text-orange-500 underline">
              Iniciá sesión acá
            </Link>
          </p>
        </div>

        {/* Formulario */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-4">
            
            {/* Nombre Completo */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre y Apellido
              </label>
              <input
                id="name"
                type="text"
                required
                className="block w-full rounded-xl border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                placeholder="Juan Pérez"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Correo Electrónico */}
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <input
                id="email-address"
                type="email"
                required
                className="block w-full rounded-xl border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Teléfono de Contacto */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono / WhatsApp (Clave para que te contacten)
              </label>
              <input
                id="phone"
                type="tel"
                required
                className="block w-full rounded-xl border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                placeholder="3584123456"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            
            {/* Contraseña */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                required
                className="block w-full rounded-xl border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-full bg-orange-500 px-4 py-3 text-sm font-bold text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-transform hover:scale-[1.02] shadow-md shadow-orange-100"
            >
              Registrarme
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}