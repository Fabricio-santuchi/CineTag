/* eslint-disable react/prop-types */
import styled from "styled-components";

const ImagemBanner = styled.div`
  width: 100%;
  height: 347px;
  background-image: ${({ $img }) => `url("/imagens/banner-${$img}.png")`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const Banner = ({ imagem }) => {
  return <ImagemBanner $img={imagem}></ImagemBanner>;
};

export default Banner;
