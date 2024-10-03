import { useContext } from "react";
import { FavoritosContext } from "../contexts/FavoritosProvider";

export const useFavoritoContext = () => {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  const adicionarFavorito = (novoFavorito) => {
    const favoritoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id
    );

    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    } else {
      novaLista.splice(
        novaLista.findIndex((item) => item.id === novoFavorito.id),
        1
      );
    }

    setFavorito(novaLista);
  };
  return {
    favorito,
    adicionarFavorito,
  };
};
