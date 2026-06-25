"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  // Cargar favoritos desde localStorage
  useEffect(() => {
    const datosGuardados = localStorage.getItem("favoritos");

    if (datosGuardados) {
      setFavoritos(JSON.parse(datosGuardados));
    }
  }, []);

  // Guardar favoritos cuando cambian
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  function agregarFavorito(mascota) {
    const existe = favoritos.find((m) => m.id === mascota.id);

    if (!existe) {
      setFavoritos([...favoritos, mascota]);
    }
  }

  function quitarFavorito(id) {
    setFavoritos(favoritos.filter((m) => m.id !== id));
  }

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        agregarFavorito,
        quitarFavorito,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  return useContext(FavoritosContext);
}