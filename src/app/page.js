import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-white rounded-3xl shadow-sm border border-gray-100">
      
      {/* Encabezado principal */}
      <div className="text-center max-w-xl px-4">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          ¡Bienvenidos a <span className="text-orange-500">MascotaLocal</span>!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          La red comunitaria para reportar mascotas perdidas y encontrar hogares responsables.
        </p>
      </div>

      {/* SECCIÓN 1: Explorar las Carteleras (3 Opciones estilo Airbnb) */}
      <div className="w-full max-w-4xl px-6 mt-4">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 text-center sm:text-left">
          ¿Qué estás buscando explorar hoy?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Opción: Mascotas Perdidas */}
          <Link 
            href="/perdidas" 
            className="group p-6 border border-gray-100 bg-gray-50/50 rounded-2xl text-center transition-all hover:bg-white hover:shadow-md hover:border-orange-200"
          >
            <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">🚨</span>
            <span className="font-bold text-gray-900 block text-base group-hover:text-orange-500 transition-colors">
              Mascotas Perdidas
            </span>
            <span className="text-xs text-gray-500 block mt-1">
              Dueños que buscan desesperadamente a sus compañeros.
            </span>
          </Link>

          {/* Opción: Mascotas Encontradas */}
          <Link 
            href="/encontradas" 
            className="group p-6 border border-gray-100 bg-gray-50/50 rounded-2xl text-center transition-all hover:bg-white hover:shadow-md hover:border-orange-200"
          >
            <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">👀</span>
            <span className="font-bold text-gray-900 block text-base group-hover:text-orange-500 transition-colors">
              Mascotas Encontradas
            </span>
            <span className="text-xs text-gray-500 block mt-1">
              Animales vistos o resguardados temporalmente en la calle.
            </span>
          </Link>

          {/* Opción: En Adopción */}
          <Link 
            href="/adopciones" 
            className="group p-6 border border-gray-100 bg-gray-50/50 rounded-2xl text-center transition-all hover:bg-white hover:shadow-md hover:border-orange-200"
          >
            <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">🏡</span>
            <span className="font-bold text-gray-900 block text-base group-hover:text-orange-500 transition-colors">
              En Adopción
            </span>
            <span className="text-xs text-gray-500 block mt-1">
              Buscando un hogar definitivo y responsable.
            </span>
          </Link>

        </div>
      </div>

      {/* SECCIÓN 2: Acción Principal (Reportar) */}
      <div className="mt-14 px-4 text-center border-t border-gray-100 w-full pt-8 max-w-2xl">
        <p className="text-sm text-gray-500 mb-3">¿Tuviste alguna emergencia o querés postular un animal?</p>
        <Link
          href="/reportar"
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 shadow-lg shadow-orange-100 transition-all hover:scale-[1.03]"
        >
          ¡Reportar una Mascota ahora!
        </Link>
      </div>

    </div>
  );
}