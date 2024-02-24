import { FC } from "react";
import { Container } from "../Container";
import {
  Facebook,
  Github,
  IconWrapper,
  ImageWrapper,
  Instagram,
  LinkedIn,
  MainBackgroundDiv,
  Overlay,
  PageSubTitle,
  PageTitle,
  PageTitlePeriod,
  StyledLink,
} from "./styled";

const HeroArea: FC<{
  pageTitle: string;
  pageSubTitles: string[];
  imageUrl: string;
}> = ({ pageTitle, pageSubTitles, imageUrl }) => {
  return (
    <MainBackgroundDiv>
      <Container>
        <div>
          <PageTitle>
            {pageTitle}
            <PageTitlePeriod>.</PageTitlePeriod>
          </PageTitle>
          {pageSubTitles.map((x) => (
            <PageSubTitle>{x}</PageSubTitle>
          ))}
          <IconWrapper>
            <StyledLink
              href="https://www.facebook.com/christopher.alba.357/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </StyledLink>
            <StyledLink
              href="https://github.com/christopher-alba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </StyledLink>
            <StyledLink
              href="https://www.linkedin.com/in/christopher-alba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </StyledLink>
            <StyledLink
              href="https://www.instagram.com/alba.sy.chris/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </StyledLink>
          </IconWrapper>
        </div>
      </Container>
      <ImageWrapper>
        <Overlay />
        <img
          src={imageUrl}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </ImageWrapper>
    </MainBackgroundDiv>
  );
};

export default HeroArea;
