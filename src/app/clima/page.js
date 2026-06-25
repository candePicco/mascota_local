function obtenerConsejo(temperatura, viento) {
  if (temperatura >= 32) {
    return {
      titulo: "🥵 Mucho calor",
      mensaje:
        "Evitá paseos largos. Sacá a tu peludito temprano o de noche, llevá agua y no lo hagas caminar sobre superficies calientes.",
      estilo: "bg-red-50 border-red-200 text-red-700",
    };
  }

  if (temperatura >= 25) {
    return {
      titulo: "☀️ Día caluroso",
      mensaje:
        "Paseá a tu mascota en horarios frescos y llevá agua. Si jadea mucho, buscá sombra y descansá.",
      estilo: "bg-orange-50 border-orange-200 text-orange-700",
    };
  }

  if (temperatura <= 12) {
    return {
      titulo: "🧥 Hace frío",
      mensaje:
        "Si tu mascota es pequeña, mayor o de pelo corto, puede necesitar abrigo. Hacé paseos más cortos.",
      estilo: "bg-blue-50 border-blue-200 text-blue-700",
    };
  }

  if (viento >= 35) {
    return {
      titulo: "💨 Mucho viento",
      mensaje:
        "Sujetá bien la correa y evitá zonas con ramas, chapas o elementos que puedan volarse.",
      estilo: "bg-yellow-50 border-yellow-200 text-yellow-700",
    };
  }

  return {
    titulo: "🐾 Buen clima para pasear",
    mensaje:
      "El clima está agradable. Es un buen momento para pasear, buscar mascotas perdidas o hacer actividad al aire libre.",
    estilo: "bg-green-50 border-green-200 text-green-700",
  };
}

export default async function ClimaPage() {
  let clima = null;
  let error = false;

  try {
    const respuesta = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-33.13&longitude=-64.35&current=temperature_2m,relative_humidity_2m,wind_speed_10m",
      { cache: "no-store" }
    );

    if (!respuesta.ok) {
      error = true;
    } else {
      clima = await respuesta.json();
    }
  } catch (e) {
    error = true;
  }

  const consejo =
    clima &&
    obtenerConsejo(
      clima.current.temperature_2m,
      clima.current.wind_speed_10m
    );

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md p-8">
      <h1 className="text-3xl font-black text-orange-600 mb-3">
        🌤 Consejos para tu peludito
      </h1>

      <p className="text-gray-600 mb-8">
        Usamos datos del clima para darte recomendaciones útiles al momento de
        pasear o buscar una mascota perdida.
      </p>

      {error || !clima ? (
        <div className="bg-red-50 border border-red-200 text-red-600 p-5 rounded-2xl">
          No se pudo cargar el clima. Revisá la conexión a internet.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-6 rounded-2xl text-center">
              <h2 className="font-bold text-lg">🌡 Temperatura</h2>
              <p className="text-3xl mt-3">
                {clima.current.temperature_2m} °C
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl text-center">
              <h2 className="font-bold text-lg">💧 Humedad</h2>
              <p className="text-3xl mt-3">
                {clima.current.relative_humidity_2m} %
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl text-center">
              <h2 className="font-bold text-lg">💨 Viento</h2>
              <p className="text-3xl mt-3">
                {clima.current.wind_speed_10m} km/h
              </p>
            </div>
          </div>

          <div className={`mt-8 border p-6 rounded-2xl ${consejo.estilo}`}>
            <h2 className="text-xl font-black mb-2">{consejo.titulo}</h2>
            <p className="font-medium">{consejo.mensaje}</p>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Datos obtenidos desde la API pública de Open-Meteo para Río Cuarto.
          </p>
        </>
      )}
    </div>
  );
}