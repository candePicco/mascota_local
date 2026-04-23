import Link from "next/link";

export default function MascotasPage() {
  const mascotas = [
    {
      id: "firulais-101",
      nombre: "Firulais",
      tipo: "Perro",
      edad: "2 años",
    },
    {
      id: "michi-202",
      nombre: "Michi",
      tipo: "Gato",
      edad: "1 año",
    },
    {
      id: "lola-303",
      nombre: "Lola",
      tipo: "Perro",
      edad: "3 años",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        🐾 Mascotas disponibles
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {mascotas.map((m) => (
          <div
            key={m.id}
            className="bg-white p-5 rounded-xl shadow-md border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-orange-600 mb-2">
              {m.nombre}
            </h2>

            <p className="text-gray-600">Tipo: {m.tipo}</p>
            <p className="text-gray-600 mb-4">Edad: {m.edad}</p>

            <Link
              href={`/mascota/${m.id}`}
              className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}