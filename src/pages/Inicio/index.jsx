import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Index";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import ContainerDeCards from "../../styles/ContainerCards_style";

const Inicio = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await fetch(
          "https://my-json-server.typicode.com/Fabricio-santuchi/cinetag-api/videos"
        );
        const dados = await resposta.json();
        setVideos(dados);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [setVideos]);

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <ContainerDeCards>
        {videos.length > 0 // Verifica se o array tem vídeos
          ? videos.map((video) => <Card key={video.id} {...video} />)
          : "Nenhum vídeo disponível"}
      </ContainerDeCards>
    </>
  );
};

export default Inicio;
