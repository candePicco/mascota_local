"use client";

import Link from 'next/link';

// Datos simulados actualizados con enlaces estables de imágenes
const CASOS_URGENTES_MOCK = [
  {
    id: 301,
    nombre: "Negrita",
    situacion: "Tránsito por postoperatorio",
    contacto: "Refugio Patitas",
    imagen: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=400&auto=format&fit=crop",
    descripcion: "Fue operada de la patita trasera. Necesita un lugar sin escaleras por 15 días para recuperarse."
  },
  {
    id: 302,
    nombre: "Abuelito",
    situacion: "Desalojo / Adopción senior",
    contacto: "Vanesa B.",
    imagen: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=400&auto=format&fit=crop",
    descripcion: "Tiene 10 años, su dueño falleció. Súper tranquilo, solo busca un rincón donde dormir calentito."
  }
];

export default function Urgentes() {
  return (
    <div className="space-y-6">
      
      {/* Cabecera de Urgencias */}
      <div className="text-center py-6 border-2 border-red-200 rounded-2xl bg-red-50/60 shadow-sm">
        <h2 className="text-3xl font-black text-red-600 italic tracking-wide">¡CASOS URGENTES!</h2>
        <p className="mt-1 text-sm font-medium text-red-800">Animales que necesitan tránsito o un hogar definitivo hoy mismo.</p>
        <Link href="/adopciones" className="inline-block mt-3 text-xs text-red-700 font-bold hover:underline">
          ← Volver a adopciones generales
        </Link>
      </div>

      {/* Grilla de Casos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
        {CASOS_URGENTES_MOCK.map((mascota) => (
          <div 
            key={mascota.id}
            className="border border-red-100 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 bg-white hover:shadow-md transition-all"
          >
            {/* Contenedor de Foto con tamaño fijo */}
            <div className="w-full sm:w-32 h-32 shrink-0 rounded-xl overflow-hidden bg-gray-100">
              <img 
                src={mascota.imagen} 
                alt={mascota.nombre} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback por si Unsplash vuelve a fallar
                  e.target.src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=400";
                }}
              />
            </div>

            {/* Información del caso */}
            <div className="flex flex-col justify-between text-sm flex-grow">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900 text-lg">{mascota.nombre}</span>
                  <span className="bg-red-100 text-red-700 font-bold text-[10px] uppercase px-2 py-0.5 rounded-md">
                    Crítico
                  </span>
                </div>
                <p className="text-red-600 font-semibold text-xs mt-0.5">⚠️ {mascota.situacion}</p>
                <p className="text-gray-500 text-xs mt-2 italic leading-relaxed">"{mascota.descripcion}"</p>
              </div>
              
              <div className="mt-3 pt-2 border-t border-gray-100 flex justify-between items-center text-xs">
                <span className="text-gray-400">Contacto: <strong className="text-gray-700">{mascota.contacto}</strong></span>
                <Link href={`/mascota/${mascota.id}`} className="text-orange-500 font-bold hover:underline">Ver detalles →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}