/* eslint-disable react/prop-types */
import styled from "styled-components";

const ContainerTitulo = styled.div`
  h1 {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
  }
`;

const Titulo = ({ children }) => {
  return <ContainerTitulo>{children}</ContainerTitulo>;
};

export default Titulo;
