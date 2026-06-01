"use client";

import { useState } from 'react';
import Link from 'next/link';

// Datos simulados (Mock Data) de animales avistados en la calle
const MASCOTAS_ENCONTRADAS_MOCK = [
  {
    id: 101,
    especie: "perro",
    zona: "Banda Norte (Cerca del puente)",
    fecha: "Visto hace 1 hora",
    imagen: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&auto=format&fit=crop&q=60",
    descripcion: "Perro mediano, rubio, cruza de labrador. Buscaba comida, tenía un collar azul gastado."
  },
  {
    id: 102,
    especie: "gato",
    zona: "Barrio Alberdi (Calle Colombres)",
    fecha: "Resguardado hoy a la mañana",
    imagen: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=500&auto=format&fit=crop&q=60",
    descripcion: "Gatito negro muy chiquito y mimoso. Lo tengo en tránsito en mi patio porque llovía."
  },
  {
    id: 103,
    especie: "perro",
    zona: "Centro (Sobremonte al 800)",
    fecha: "Visto ayer",
    imagen: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&auto=format&fit=crop&q=60",
    descripcion: "Cruza de ovejero alemán, tamaño grande. Parecía desorientado siguiendo a la gente."
  }
];

export default function MascotasEncontradas() {
  const [filtroEspecie, setFiltroEspecie] = useState('todos');

  const mascotasFiltradas = filtroEspecie === 'todos' 
    ? MASCOTAS_ENCONTRADAS_MOCK 
    : MASCOTAS_ENCONTRADAS_MOCK.filter(m => m.especie === filtroEspecie);

  return (
    <div className="space-y-8">
      
      {/* Título de la sección */}
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Mascotas Encontradas / Avistadas</h1>
        <p className="text-gray-500 text-sm mt-1">Reportes comunitarios de animales retenidos o vistos sueltos en la vía pública.</p>
      </div>

      {/* Filtros estilo Airbnb */}
      <div className="flex justify-center sm:justify-start space-x-8 border-b border-gray-100 pb-4 overflow-x-auto">
        <button 
          onClick={() => setFiltroEspecie('todos')}
          className={`flex flex-col items-center space-y-1 pb-2 border-b-2 transition-all ${filtroEspecie === 'todos' ? 'border-gray-900 font-bold text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
        >
          <span className="text-2xl">🐾</span>
          <span className="text-xs tracking-wide">Todos</span>
        </button>

        <button 
          onClick={() => setFiltroEspecie('perro')}
          className={`flex flex-col items-center space-y-1 pb-2 border-b-2 transition-all ${filtroEspecie === 'perro' ? 'border-gray-900 font-bold text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
        >
          <span className="text-2xl">🐶</span>
          <span className="text-xs tracking-wide">Perros</span>
        </button>

        <button 
          onClick={() => setFiltroEspecie('gato')}
          className={`flex flex-col items-center space-y-1 pb-2 border-b-2 transition-all ${filtroEspecie === 'gato' ? 'border-gray-900 font-bold text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
        >
          <span className="text-2xl">🐱</span>
          <span className="text-xs tracking-wide">Gatos</span>
        </button>
      </div>

      {/* Grid de Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mascotasFiltradas.map((mascota) => (
          <Link 
            key={mascota.id} 
            href={`/mascota/${mascota.id}`}
            className="group flex flex-col space-y-3 cursor-pointer"
          >
            {/* Imagen Cuadrada */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 relative shadow-sm">
              <img 
                src={mascota.imagen} 
                alt="Mascota encontrada"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Etiqueta distintiva sutil */}
              <span className="absolute top-3 left-3 bg-teal-600 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                Encontrado
              </span>
            </div>

            {/* Información dinámicamente pensada para animales sin nombre */}
            <div className="px-1 text-sm">
              <div className="flex justify-between items-start gap-2">
                <span className="font-bold text-gray-900 text-base leading-tight truncate">
                  {mascota.especie === 'perro' ? '🐶 Perro encontrado' : '🐱 Gato encontrado'}
                </span>
                <span className="text-[11px] text-gray-400 font-medium shrink-0 mt-0.5">{mascota.fecha}</span>
              </div>
              <p className="text-gray-600 font-semibold mt-1">📍 {mascota.zona}</p>
              <p className="text-gray-400 text-xs mt-1 line-clamp-2 italic">
                "{mascota.descripcion}"
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Caso vacío */}
      {mascotasFiltradas.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No hay reportes de avistajes en esta categoría por el momento.
        </div>
      )}

    </div>
  );
}