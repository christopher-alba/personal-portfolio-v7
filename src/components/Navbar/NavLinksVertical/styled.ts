import { Link } from "react-router-dom";
import styled from "styled-components";
export const MainDiv = styled("div")`
  @media (min-width: 701px) {
    display: none;
  }
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
type NavLinkProps = {
  isActive: boolean;
};
export const NavLink = styled(Link)<NavLinkProps>`
  padding: 20px 50px;
  border-left: 3px solid ${({ theme }) => theme.colors.secondary2};
  font-size: 0.8rem;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary1};
  display: inline-block;
  background: ${({ isActive, theme }) =>
    isActive ? `${theme.colors.secondary2 + "69"}` : "transparent"};
`;

type UnderlineProps = {
  $height: string;
  $yPos: string;
};

export const Underline = styled("div")<UnderlineProps>`
  background-color: ${({ theme }) => theme.colors.tertiary1};
  height: ${({ $height }) => $height};
  width: 3px;
  transition: top 500ms;
  top: ${({ $yPos }) => $yPos};
`;
