import { useParams } from "react-router-dom";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Container_style from "@/styles/Container_style";
import NaoEncontrada from "../NaoEncontrada";
import { useEffect, useState } from "react";

const Player = () => {
  const [video, setVideo] = useState();
  const parametros = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await fetch(
          `https://my-json-server.typicode.com/Fabricio-santuchi/cinetag-api/videos?id=${parametros.id}`
        );
        const dados = await resposta.json();
        setVideo(...dados);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [parametros]);

  if (!video) {
    return <NaoEncontrada />;
  }

  console.log(video);
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <Container_style>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Container_style>
    </>
  );
};

export default Player;
