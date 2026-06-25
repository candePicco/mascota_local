export default function PerdidasPage() {
  const mascotas = [
    {
      id: 1,
      nombre: "Luna",
      raza: "Caniche",
      zona: "Centro",
      fecha: "20/06/2026",
      imagen:
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
    },
    {
      id: 2,
      nombre: "Rocky",
      raza: "Labrador",
      zona: "Banda Norte",
      fecha: "18/06/2026",
      imagen:
        "https://images.unsplash.com/photo-1552053831-71594a27632d",
    },
    {
      id: 3,
      nombre: "Milo",
      raza: "Mestizo",
      zona: "Alberdi",
      fecha: "17/06/2026",
      imagen:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-red-100 border-l-4 border-red-500 rounded-2xl p-6">
        <h1 className="text-3xl font-black text-gray-900 mb-2">
          🚨 Mascotas Perdidas
        </h1>

        <p className="text-gray-700">
          Cada minuto cuenta. Compartí información si viste alguna de estas
          mascotas.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Reportes Activos
            </h2>

            <p className="text-gray-500">
              Mascotas buscadas por sus familias.
            </p>
          </div>

          <span className="bg-red-100 text-red-600 font-bold px-4 py-2 rounded-full text-sm">
            Urgente
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mascotas.map((mascota) => (
            <div
              key={mascota.id}
              className="overflow-hidden rounded-3xl border border-gray-100 hover:shadow-lg transition-all"
            >
              <img
                src={mascota.imagen}
                alt={mascota.nombre}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="font-black text-lg">
                  {mascota.nombre}
                </h3>

                <p className="text-gray-600">
                  {mascota.raza}
                </p>

                <div className="mt-4 text-sm text-gray-500 space-y-1">
                  <p>📍 {mascota.zona}</p>
                  <p>📅 {mascota.fecha}</p>
                </div>

                <button className="mt-5 w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors">
                  Tengo información
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}