import styled from "styled-components";

const ContainerRodape = styled.footer`
  display: flex;
  justify-content: center;
  background-color: var(--preto);

  h2 {
    font-size: 18px;
    font-weight: 400;
    color: var(--branco);
  }
`;

const Rodape = () => {
  return (
    <ContainerRodape>
      <h2>Desenvolvido por Alura.</h2>
    </ContainerRodape>
  );
};

export default Rodape;
