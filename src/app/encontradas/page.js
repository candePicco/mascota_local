export default function EncontradasPage() {
  const mascotas = [
    {
      id: 1,
      especie: "Perro",
      zona: "Centro",
      fecha: "22/06/2026",
      descripcion: "Encontrado cerca de Plaza Roca.",
      imagen:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    },
    {
      id: 2,
      especie: "Gato",
      zona: "Banda Norte",
      fecha: "21/06/2026",
      descripcion: "Muy dócil, parece tener dueño.",
      imagen:
        "https://images.unsplash.com/photo-1519052537078-e6302a4968d4",
    },
    {
      id: 3,
      especie: "Perro",
      zona: "Alberdi",
      fecha: "20/06/2026",
      descripcion: "Tiene collar rojo.",
      imagen:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-100 border-l-4 border-blue-500 rounded-2xl p-6">
        <h1 className="text-3xl font-black text-gray-900 mb-2">
          👀 Mascotas Encontradas
        </h1>

        <p className="text-gray-700">
          ¿Reconocés alguna de estas mascotas? Ayudanos a reunirlas con sus
          familias.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Reportes recientes
            </h2>

            <p className="text-gray-500">
              Mascotas encontradas por la comunidad.
            </p>
          </div>

          <span className="bg-orange-100 text-orange-600 font-bold px-4 py-2 rounded-full text-sm">
            {mascotas.length} reportes
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
                alt={mascota.especie}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="font-black text-lg">
                  {mascota.especie}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {mascota.descripcion}
                </p>

                <div className="mt-4 text-sm text-gray-500 space-y-1">
                  <p>📍 {mascota.zona}</p>
                  <p>📅 {mascota.fecha}</p>
                </div>

                <button className="mt-5 w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors">
                  Creo reconocerla
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}