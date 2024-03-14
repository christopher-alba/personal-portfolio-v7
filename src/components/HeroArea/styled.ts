import styled, { css } from "styled-components";
import FacebookIcon from "../../assets/facebookIcon.svg?react";
import InstagramIcon from "../../assets/instagramIcon.svg?react";
import GithubIcon from "../../assets/githubIcon.svg?react";
import LinkedInIcon from "../../assets/linkedinIcon.svg?react";

export const MainBackgroundDiv = styled("div")`
  background: ${({ theme }) => theme.colors.primary1};
  min-height: 70vh;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const PageTitle = styled("h1")`
  @media (max-width: 600px) {
    margin-top: 50px;
    font-size: 2rem;
    text-align: center;
  }
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
`;
export const PageTitlePeriod = styled("span")`
  color: ${({ theme }) => theme.colors.tertiary1};
`;

export const PageSubTitle = styled("h3")`
  color: ${({ theme }) => theme.colors.secondary3 + "69"};
  margin: 3px 0;
  font-size: 1.5rem;
  position: relative;
  z-index: 2;
  @media (max-width: 600px) {
    text-align: center;
    font-size: 1rem;
  }
`;

export const Overlay = styled("div")`
  background: ${({ theme }) => theme.colors.primary1 + "BB"};
  height: 100%;
  width: 100%;
  transition: 500ms;
  position: absolute;
  &:hover {
    background: transparent;
  }
`;

export const ImageWrapper = styled("div")`
  position: absolute;
  right: 0;
  width: 25vw;
  height: 70%;
  @media (max-width: 600px) {
    position: static;
    width: 90%;
    margin: 50px auto;
    height: 30vh;
  }
`;
const iconStyles = css`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.secondary2};
  transition: 500ms;
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
  &:hover {
    filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.tertiary1});
  }
`;
export const Facebook = styled(FacebookIcon)`
  ${iconStyles}
`;
export const Instagram = styled(InstagramIcon)`
  ${iconStyles}
`;
export const Github = styled(GithubIcon)`
  ${iconStyles}
`;
export const LinkedIn = styled(LinkedInIcon)`
  ${iconStyles}
`;
export const StyledLink = styled("a")`
  text-decoration: none;
`;

export const IconWrapper = styled("div")`
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
