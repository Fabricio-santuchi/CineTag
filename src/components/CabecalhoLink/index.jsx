/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

const CabLink = styled(Link)`
  color: var(--branco);
  font-size: 18px;
  font-weight: 400;
  padding: 1em;
  text-decoration: none;
`;

const CabecalhoLink = ({ url, children }) => {
  return <CabLink to={url}>{children}</CabLink>;
};

export default CabecalhoLink;
