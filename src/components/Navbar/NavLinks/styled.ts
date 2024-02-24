import { Link } from "react-router-dom";
import styled from "styled-components";
export const MainDiv = styled("div")`
  @media (max-width: 700px) {
    display: none;
  }
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const NavLink = styled(Link)`
  padding: 30px;
  font-size: 0.8rem;
  box-sizing: border-box;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary1};
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondary1};
  display: block;
  box-sizing: content-box;
`;

type UnderlineProps = {
  $width: string;
  $xPos: string;
};

export const Underline = styled("div")<UnderlineProps>`
  background-color: ${({ theme }) => theme.colors.tertiary1};
  width: ${({ $width }) => $width};
  height: 3px;
  transition: left 500ms;
  left: ${({ $xPos }) => $xPos};
`;
