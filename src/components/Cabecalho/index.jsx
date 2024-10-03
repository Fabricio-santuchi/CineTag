import { Link } from "react-router-dom";
import logo from "/imagens/logo.png";
import styled from "styled-components";
import CabecalhoLink from "../CabecalhoLink";

const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1em 20em;
  background-color: var(--preto);
`;

const Cabecalho = () => {
  return (
    <ContainerHeader>
      <Link to="/">
        <img src={logo} alt="Logo do cinetag" />
      </Link>
      <nav>
        <CabecalhoLink url="/">Home</CabecalhoLink>
        <CabecalhoLink url="/Favoritos">Favoritos</CabecalhoLink>
      </nav>
    </ContainerHeader>
  );
};
export default Cabecalho;
