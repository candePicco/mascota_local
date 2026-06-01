import Link from 'next/link';

// Base de datos unificada de simulación para el TP
const TODAS_LAS_MASCOTAS_MOCK = [
  // Perdidas
  { id: 1, nombre: "Rocco", tipo: "Perdido", especie: "perro", zona: "Banda Norte", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80", descripcion: "Llevaba collar rojo sin chapita. Es muy manso y asustadizo.", extraLabel: "Collar", extraValue: "Rojo sin chapita" },
  { id: 2, nombre: "Luna", tipo: "Perdido", especie: "gato", zona: "Centro / Plaza Roca", fecha: "Ayer", imagen: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80", descripcion: "Gatita siamesa, tiene ojos muy celestes. Es sumamente asustadiza pero no es agresiva.", extraLabel: "Rasgo", extraValue: "Ojos celestes intensos" },
  { id: 3, nombre: "Chiquito", tipo: "Perdido", especie: "perro", zona: "Barrio Alberdi", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=80", descripcion: "Pug carlino indocumentado. Requiere medicación diaria por un problema respiratorio.", extraLabel: "Salud", extraValue: "Requiere medicación" },
  { id: 4, nombre: "Mimi", tipo: "Perdido", especie: "gato", zona: "Universidad / Ruta 36", fecha: "Hace 3 horas", imagen: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&auto=format&fit=crop&q=80", descripcion: "Tricolor, chiquita. Se escapó del departamento por una ventana abierta.", extraLabel: "Tamaño", extraValue: "Muy pequeña / Cachorra" },
  
  // Encontradas
  { id: 101, nombre: "Perro Encontrado", tipo: "Encontrado", especie: "perro", zona: "Banda Norte (Cerca del puente)", fecha: "Hace 1 hora", imagen: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&auto=format&fit=crop&q=80", descripcion: "Perro mediano, rubio, cruza de labrador. Buscaba comida, tenía un collar azul gastado.", extraLabel: "Estado", extraValue: "En la calle / Suelto" },
  { id: 102, nombre: "Gato Encontrado", tipo: "Encontrado", especie: "gato", zona: "Barrio Alberdi (Calle Colombres)", fecha: "Hoy a la mañana", imagen: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=800&auto=format&fit=crop&q=80", descripcion: "Gatito negro muy chiquito y mimoso. Lo tengo en tránsito en mi patio porque llovía intensamente.", extraLabel: "Situación", extraValue: "Resguardado temporalmente" },
  { id: 103, nombre: "Perro Encontrado", tipo: "Encontrado", especie: "perro", zona: "Centro (Sobremonte al 800)", fecha: "Ayer", imagen: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&auto=format&fit=crop&q=80", descripcion: "Cruza de ovejero alemán, tamaño grande. Parecía desorientado siguiendo a la gente que caminaba.", extraLabel: "Tamaño", extraValue: "Grande" },
  
  // Adopciones
  { id: 201, nombre: "Milo", tipo: "En Adopción", especie: "perro", zona: "Refugio Local", fecha: "Disponible", imagen: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=80", descripcion: "Es súper juguetón, ideal para familias con chicos. Se entrega completamente vacunado y desparasitado.", extraLabel: "Requisitos", extraValue: "Patio cerrado y castración" },
  { id: 202, nombre: "Cleo", tipo: "En Adopción", especie: "gato", zona: "Tránsito Particular", fecha: "Disponible", imagen: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&auto=format&fit=crop&q=80", descripcion: "Es una gata muy tranquila y compañera. Ideal para vivir en departamento. Ya está castrada.", extraLabel: "Requisitos", extraValue: "Redes en ventanas" },
  { id: 203, font: "Oliver & Simona", nombre: "Oliver y Simona", tipo: "En Adopción", especie: "gato", zona: "Protectora", fecha: "Disponible", imagen: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?w=800&auto=format&fit=crop&q=80", descripcion: "Son muy unidos, duermen y juegan siempre juntos. Súper mimosos.", extraLabel: "Requisitos", extraValue: "Adopción conjunta" },

  // Urgentes
  { id: 301, nombre: "Negrita", tipo: "Urgente", especie: "perro", zona: "Refugio Patitas", fecha: "Crítico", imagen: "https://images.unsplash.com/photo-1537151625747-768eb64226fd?w=800&auto=format&fit=crop&q=80", descripcion: "Fue operada de la patita trasera. Necesita un lugar sin escaleras por 15 días para poder recuperarse de forma segura.", extraLabel: "Motivo", extraValue: "Postoperatorio" },
  { id: 302, nombre: "Abuelito", tipo: "Urgente", especie: "perro", zona: "Vanesa B.", fecha: "Crítico", imagen: "https://images.unsplash.com/photo-1477884213974-b997539990b7?w=800&auto=format&fit=crop&q=80", descripcion: "Tiene 10 años, su dueño falleció. Súper tranquilo, solo busca un rincón donde dormir calentito.", extraLabel: "Edad", extraValue: "Senior (10 años)" }
];

export default async function DetalleMascota({ params }) {
  const { id } = await params;
  
  // Buscamos la mascota parseando el ID numérico
  const mascota = TODAS_LAS_MASCOTAS_MOCK.find(m => m.id === parseInt(id));

  // Manejo de error sutil si escriben un ID que no existe en el mock
  if (!mascota) {
    return (
      <div className="max-w-xl mx-auto mt-12 p-8 text-center bg-white rounded-3xl border shadow-sm">
        <span className="text-4xl">🔍</span>
        <h2 className="text-xl font-bold text-gray-800 mt-3">No encontramos ese reporte</h2>
        <p className="text-gray-500 text-sm mt-1">El código de mascota #{id} no coincide con ningún registro activo.</p>
        <Link href="/" className="inline-block mt-4 text-sm font-bold text-orange-500 hover:underline">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  // Definición de colores dinámicos del Tag según el tipo de caso
  const badgeColors = {
    "Perdido": "bg-red-500 text-white",
    "Encontrado": "bg-teal-600 text-white",
    "En Adopción": "bg-purple-600 text-white",
    "Urgente": "bg-red-600 text-white animate-pulse"
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      
      {/* Botón de retroceso arriba de todo */}
      <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center text-xs text-gray-500">
        <Link href="/" className="font-bold text-gray-600 hover:text-orange-500 flex items-center gap-1">
          ← Volver a las carteleras
        </Link>
        <span className="font-mono bg-gray-200 px-2 py-0.5 rounded text-gray-700">Ficha #{id}</span>
      </div>

      {/* Grid Principal: Foto Izquierda / Información Derecha */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Lado Izquierdo: Imagen */}
        <div className="w-full aspect-square md:h-full min-h-[350px] relative bg-gray-100">
          <img 
            src={mascota.imagen} 
            alt={mascota.nombre} 
            className="w-full h-full object-cover"
          />
          {/* Badge de tipo de caso flotante sobre la imagen */}
          <span className={`absolute top-4 left-4 font-black text-xs uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md ${badgeColors[mascota.tipo] || 'bg-gray-800 text-white'}`}>
            {mascota.tipo}
          </span>
        </div>

        {/* Lado Derecho: Textos y Datos */}
        <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            {/* Título y Especie */}
            <div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">{mascota.nombre}</h1>
              <p className="text-gray-400 font-medium text-xs uppercase tracking-wider mt-0.5">
                Categoría: {mascota.especie === 'perro' ? '🐶 Canino' : '🐱 Felino'}
              </p>
            </div>

            {/* Fila de Datos Básicos Geográficos */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
                <span className="block text-[11px] uppercase tracking-wide text-gray-400 font-bold">Ubicación</span>
                <span className="text-sm font-bold text-gray-800 block truncate mt-0.5">📍 {mascota.zona}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
                <span className="block text-[11px] uppercase tracking-wide text-gray-400 font-bold">Tiempo</span>
                <span className="text-sm font-bold text-gray-800 block truncate mt-0.5">⏱️ {mascota.fecha}</span>
              </div>
            </div>

            {/* Campo Extra Dinámico (Requisitos, Salud, Marcas) */}
            <div className="bg-orange-50/60 border border-orange-100 p-3 rounded-2xl">
              <span className="block text-[11px] uppercase tracking-wide text-orange-700 font-bold">
                {mascota.extraLabel} Destacado
              </span>
              <span className="text-sm font-medium text-gray-700 block mt-0.5">
                📌 {mascota.extraValue}
              </span>
            </div>

            {/* Descripción Detallada */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Descripción detallada</h4>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed bg-gray-50/40 p-3 rounded-xl border border-dashed border-gray-200 italic">
                "{mascota.descripcion}"
              </p>
            </div>
          </div>

          {/* Sección Inferior: Acción de contacto */}
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
            <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md shadow-orange-100 hover:scale-[1.01] active:scale-95">
              Contactar Publicador / Rescatista
            </button>
            <p className="text-[10px] text-gray-400 text-center">
              Al hacer clic te comunicarás de forma directa para coordinar de manera responsable.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}