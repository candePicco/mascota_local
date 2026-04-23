import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white rounded-3xl shadow-sm border border-gray-100">
      <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
        ¡Bienvenidos a <span className="text-orange-500">MascotaLocal</span>!
      </h1>

      <p className="text-xl text-gray-600 max-w-lg text-center mb-10">
        La red comunitaria para reportar mascotas perdidas y encontrar hogares responsables.
      </p>

      <div className="mt-8 flex justify-center">
        <Link
          href="/mascota"
          className="bg-orange-500 text-white px-10 py-5 rounded-full text-lg font-bold shadow-lg hover:bg-orange-600 transition-transform hover:scale-105"
        >
          🐾 Ver Mascotas
        </Link>
      </div>

      <div className="mt-12">
        <Link
          href="/reportar"
          className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 shadow-lg shadow-orange-200 transition-transform hover:scale-105"
        >
          ¡Reportar una Mascota ahora!
        </Link>
      </div>
    </div>
  );
}