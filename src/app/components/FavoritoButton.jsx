"use client";

import { useFavoritos } from "@/context/FavoritosContext";

export default function FavoritoButton({ mascota }) {
  const { favoritos, agregarFavorito, quitarFavorito } = useFavoritos();

  const esFavorito = favoritos.some((m) => m.id === mascota.id);

  function manejarClick() {
    if (esFavorito) {
      quitarFavorito(mascota.id);
    } else {
      agregarFavorito(mascota);
    }
  }

  return (
    <button
      onClick={manejarClick}
      className={`mt-4 px-5 py-2 rounded-full font-bold transition-all ${
        esFavorito
          ? "bg-red-100 text-red-600 hover:bg-red-200"
          : "bg-orange-500 text-white hover:bg-orange-600"
      }`}
    >
      {esFavorito ? "Quitar de favoritos ❤️" : "Agregar a favoritos 🤍"}
    </button>
  );
}