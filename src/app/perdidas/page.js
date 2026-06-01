"use client";

import { useState } from 'react';
import Link from 'next/link';

// Datos simulados (Mock Data) para Programación 3
const MASCOTAS_PERDIDAS_MOCK = [
  {
    id: 1,
    nombre: "Rocco",
    especie: "perro",
    zona: "Banda Norte",
    fecha: "Perdido hace 2 días",
    imagen: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=60",
    descripcion: "Llevaba collar rojo sin chapita. Es muy manso."
  },
  {
    id: 2,
    nombre: "Luna",
    especie: "gato",
    zona: "Centro / Plaza Roca",
    fecha: "Perdida ayer",
    imagen: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60",
    descripcion: "Gatita siamesa, tiene ojos muy celestes. Asustadiza."
  },
  {
    id: 3,
    nombre: "Chiquito",
    especie: "perro",
    zona: "Barrio Alberdi",
    fecha: "Perdido hace 5 días",
    imagen: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&auto=format&fit=crop&q=60",
    descripcion: "Pug carlino indocumentado. Requiere medicación."
  },
  {
    id: 4,
    nombre: "Mimi",
    especie: "gato",
    zona: "Universidad / Ruta 36",
    fecha: "Perdida hace 3 horas",
    imagen: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500&auto=format&fit=crop&q=60",
    descripcion: "Tricolor, chiquita. Se escapó del departamento."
  }
];

export default function MascotasPerdidas() {
  const [filtroEspecie, setFiltroEspecie] = useState('todos');

  // Filtrado lógico de los datos
  const mascotasFiltradas = filtroEspecie === 'todos' 
    ? MASCOTAS_PERDIDAS_MOCK 
    : MASCOTAS_PERDIDAS_MOCK.filter(m => m.especie === filtroEspecie);

  return (
    <div className="space-y-8">
      
      {/* Título de la sección */}
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Mascotas Perdidas</h1>
        <p className="text-gray-500 text-sm mt-1">Ayudemos a estos compañeros a volver a sus hogares.</p>
      </div>

      {/* FILTROS ICONICOS ESTILO AIRBNB */}
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

      {/* GRID DE TARJETAS ESTILO AIRBNB */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mascotasFiltradas.map((mascota) => (
          <Link 
            key={mascota.id} 
            href={`/mascota/${mascota.id}`}
            className="group flex flex-col space-y-3 cursor-pointer"
          >
            {/* Contenedor de la Imagen con Aspect Ratio fijo */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 relative shadow-sm">
              <img 
                src={mascota.imagen} 
                alt={mascota.nombre}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Etiqueta de Urgencia sutil arriba a la izquierda */}
              <span className="absolute top-3 left-3 bg-red-500 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                Buscado
              </span>
            </div>

            {/* Información de la Mascota */}
            <div className="px-1 text-sm">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 text-base">{mascota.nombre}</span>
                <span className="text-xs text-gray-400 font-medium">{mascota.fecha}</span>
              </div>
              <p className="text-gray-500 font-medium mt-0.5">📍 {mascota.zona}</p>
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
          No hay reportes activos para esta categoría actualmente.
        </div>
      )}

    </div>
  );
}