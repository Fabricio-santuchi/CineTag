/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FavoritosContext = createContext(); // cria o contexto
FavoritosContext.displayName = "Favoritos"; // nome do contexto

const FavoritosProvider = ({ children }) => {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;
