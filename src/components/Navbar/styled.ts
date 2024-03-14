import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import MenuIcon from "../../assets/bars-solid.svg?react";

export const MainDiv = styled("div")`
  background: ${({ theme }) => theme.colors.secondary2};
  width: 100%;
  min-height: 70px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const PrimaryDiv = styled("div")`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const SecondaryDiv = styled("div")`
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Brand = styled("h1")`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 10px 0;
  margin-right: 50px;
`;
const buttonTheme = css`
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 5px 25px;
  color: ${({ theme }) => theme.colors.primary1};
  font-size: 0.7rem;
  transition: border-color 500ms;
`;
export const ThemeSwitcher = styled("button")`
  ${buttonTheme}
  background: ${({ theme }) => theme.colors.secondary3};
  &:hover {
    border-color: ${({ theme }) => theme.colors.tertiary1};
  }
  @media (max-width: 1200px) {
    background: ${({ theme }) => theme.colors.secondary2};
  }
  box-sizing: border-box;
  text-align: center;
  display: inline-block;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ResumeButton = styled(Link)`
  ${buttonTheme}
  background: ${({ theme }) => theme.colors.primary1};
  color: ${({ theme }) => theme.colors.secondary1};
  &:hover {
    border-color: ${({ theme }) => theme.colors.tertiary1};
  }
  margin-right: 20px;
  text-decoration: none;
  white-space: nowrap;
  box-sizing: border-box;
  text-align: center;
  display: inline-block;
  @media (max-width: 450px) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const Menu = styled(MenuIcon)`
  width: 20px;
  height: 20px;
`;

export const MenuButton = styled("button")`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary1};
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

export const MenuWrapper = styled("div")`
  @media (min-width: 1200px) {
    display: none;
  }
  background: ${({ theme }) => theme.colors.secondary3};
  width: 100%;
  color: ${({ theme }) => theme.colors.primary1};
  padding: 20px 0;
`;

export const ShowNavButton = styled("button")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 1000;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.secondary1};
  text-align: left;
  padding-left: 30px;
  padding-top: 30px;
`;
