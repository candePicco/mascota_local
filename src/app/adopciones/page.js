import Link from 'next/link';

export default function Adopciones() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Mascotas en Adopción</h2>
      <p className="mb-6">Buscamos familias responsables para estos peluditos.</p>
      
      <Link href="/adopciones/urgentes" className="bg-red-500 text-white px-6 py-3 rounded-full font-bold hover:bg-red-600">
        Ver Casos Urgentes 🔥
      </Link>
    </div>
  );
}