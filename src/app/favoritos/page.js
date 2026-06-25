"use client";

import { useFavoritos } from "@/context/FavoritosContext";

export default function FavoritosPage() {
  const { favoritos } = useFavoritos();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-black text-orange-600 mb-2">
        ❤️ Mis Favoritos
      </h1>

      <p className="text-gray-600 mb-8">
        Acá podés ver todas las mascotas que guardaste.
      </p>

      {favoritos.length === 0 ? (
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
          <div className="text-5xl mb-3">🐶</div>

          <h2 className="text-xl font-bold">
            Todavía no agregaste favoritos
          </h2>

          <p className="text-gray-600 mt-2">
            Entrá al detalle de una mascota y presioná ❤️ Agregar a favoritos.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {favoritos.map((mascota) => (
            <div
              key={mascota.id}
              className="bg-white rounded-2xl shadow border border-gray-100 p-6"
            >
              <div className="text-5xl mb-3">🐾</div>

              <h2 className="text-2xl font-bold text-orange-600">
                {mascota.nombre}
              </h2>

              <p className="text-gray-600 mt-2">
                {mascota.descripcion}
              </p>

              <div className="mt-4 inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">
                ID: {mascota.id}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}