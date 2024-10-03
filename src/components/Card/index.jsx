/* eslint-disable react/prop-types */
import styled from "styled-components";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { useFavoritoContext } from "@/hooks/useFavoritoContext";
import { Link } from "react-router-dom";

const ContainerCard = styled.div`
  padding: 0 0 1em 0;
  margin-top: 0.5em;
  width: 202px;
  background-color: var(--cinza);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    padding: 0 1em;
  }
  .Link {
    text-decoration: none;
    color: var(--preto);
    text-align: left;
  }
`;

const Capa = styled.img`
  width: 100%;
`;
const FavoritarIcon = styled.img`
  width: 25px;
  padding: 0 1em;
  cursor: pointer;
`;

const Card = ({ id, titulo, capa }) => {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

  return (
    <ContainerCard>
      <Link className="Link" to={`/${id}`}>
        <Capa src={capa} alt={titulo} />
        <h2>{titulo}</h2>
      </Link>
      <FavoritarIcon
        onClick={() => adicionarFavorito({ id, titulo, capa })}
        src={icone}
        alt="Favoritar filme"
      />
    </ContainerCard>
  );
};

export default Card;
