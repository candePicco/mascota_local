"use client";

import { useState } from 'react';
import Link from 'next/link';

const ADOPCIONES_MOCK = [
  {
    id: 201,
    nombre: "Milo",
    especie: "perro",
    edad: "Cachorro (3 meses)",
    requisitos: "Patio cerrado y compromiso de castración.",
    imagen: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&auto=format&fit=crop&q=60",
    descripcion: "Es súper juguetón, ideal para familias con chicos. Se entrega vacunado."
  },
  {
    id: 202,
    nombre: "Cleo",
    especie: "gato",
    edad: "Adulto (2 años)",
    requisitos: "Hogar con protección en ventanas (sin acceso a techos).",
    imagen: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop&q=60",
    descripcion: "Es una gata muy tranquila y compañera. Ideal para departamento."
  },
  {
    id: 203,
    nombre: "Oliver & Simona",
    especie: "gato",
    edad: "Hermanitos (5 meses)",
    requisitos: "Adopción conjunta preferentemente.",
    imagen: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?w=500&auto=format&fit=crop&q=60",
    descripcion: "Son muy unidos, duermen y juegan siempre juntos. Súper mimosos."
  }
];

export default function Adopciones() {
  const [filtroEspecie, setFiltroEspecie] = useState('todos');

  const mascotasFiltradas = filtroEspecie === 'todos' 
    ? ADOPCIONES_MOCK 
    : ADOPCIONES_MOCK.filter(m => m.especie === filtroEspecie);

  return (
    <div className="space-y-6">
      
      {/* Cabecera interna del componente */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pb-2">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Mascotas en Adopción</h2>
          <p className="text-gray-500 text-sm">Buscamos familias responsables para estos peluditos.</p>
        </div>
        
        {/* Tu botón original estilizado al look general */}
        <Link 
          href="/adopciones/urgentes" 
          className="inline-block bg-red-500 text-white text-center px-5 py-2.5 rounded-full text-sm font-bold hover:bg-red-600 shadow-sm transition-all hover:scale-[1.02]"
        >
          Ver Casos Urgentes 🔥
        </Link>
      </div>

      {/* Filtros rápidos */}
      <div className="flex space-x-6 border-b border-gray-100 pb-2 overflow-x-auto">
        <button 
          onClick={() => setFiltroEspecie('todos')}
          className={`flex items-center space-x-1.5 pb-2 border-b-2 text-sm transition-all ${filtroEspecie === 'todos' ? 'border-gray-900 font-bold text-gray-900' : 'border-transparent text-gray-400'}`}
        >
          <span>🐾</span>
          <span>Todos</span>
        </button>
        <button 
          onClick={() => setFiltroEspecie('perro')}
          className={`flex items-center space-x-1.5 pb-2 border-b-2 text-sm transition-all ${filtroEspecie === 'perro' ? 'border-gray-900 font-bold text-gray-900' : 'border-transparent text-gray-400'}`}
        >
          <span>🐶</span>
          <span>Perros</span>
        </button>
        <button 
          onClick={() => setFiltroEspecie('gato')}
          className={`flex items-center space-x-1.5 pb-2 border-b-2 text-sm transition-all ${filtroEspecie === 'gato' ? 'border-gray-900 font-bold text-gray-900' : 'border-transparent text-gray-400'}`}
        >
          <span>🐱</span>
          <span>Gatos</span>
        </button>
      </div>

      {/* Grid de Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2">
        {mascotasFiltradas.map((mascota) => (
          <Link 
            key={mascota.id} 
            href={`/mascota/${mascota.id}`}
            className="group flex flex-col space-y-2.5 cursor-pointer"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 relative shadow-sm">
              <img 
                src={mascota.imagen} 
                alt={mascota.nombre}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-purple-600 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full">
                En Adopción
              </span>
            </div>

            <div className="px-1 text-sm">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 text-base">{mascota.nombre}</span>
                <span className="text-xs text-gray-400 font-medium">{mascota.edad}</span>
              </div>
              
              <div className="mt-1.5 bg-purple-50/60 border border-purple-100 rounded-xl p-2">
                <p className="text-[11px] text-purple-700 font-medium line-clamp-2">
                  📋 <span className="font-bold">Req:</span> {mascota.requisitos}
                </p>
              </div>
              <p className="text-gray-400 text-xs mt-2 line-clamp-2 italic">"{mascota.descripcion}"</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}