import Banner from "../../components/Banner/Index";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import ContainerDeCards from "../../styles/ContainerCards_style";
import { useFavoritoContext } from "../../hooks/useFavoritoContext";

const Favoritos = () => {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <ContainerDeCards>
        {favorito.map((fav) => (
          <Card key={fav.id} {...fav} />
        ))}
      </ContainerDeCards>
    </>
  );
};

export default Favoritos;
