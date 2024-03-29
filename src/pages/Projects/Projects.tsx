import { FC, useEffect } from "react";
import HeroArea from "../../components/HeroArea";
import SubTitle from "../../components/SubTitle";
import { Container } from "../../components/Container";
import { data, Project, Type } from "./data";
import { Link } from "react-router-dom";
import { Image, ImageDiv, ImageDivWide, ImagesWrapper, Overlay } from "./styled";
import { Entry } from "contentful";
import { StyledLink } from "../../components/HeroArea/styled";

const Projects: FC<{ contentful?: Entry }> = (contentful) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroArea
        pageTitle="Projects"
        pageSubTitles={[
          "Most of these were done during university.",
          "A showcase of my skills through hobby development.",
        ]}
        imageUrl={
          (contentful.contentful?.fields.projectsImage as any)?.fields?.file
            ?.url
        }
      />
      <Container>
        <SubTitle
          mainText="During University"
          description="Projects outside the curriculum"
        />
        <ImagesWrapper>
          {(contentful?.contentful?.fields?.projects as Project[])
            .filter((x) => x.type === Type.UNIVERSITY)
            .map((x) => (
              <ImageDiv>
                <Link
                  to={{ pathname: `/projects/${x.name.replaceAll(" ", "")}` }}
                  state={x}
                  style={{ display: "block" }}
                >
                  <Overlay>{x.name}</Overlay>
                </Link>
                <Image src={x.imgSrc} />
              </ImageDiv>
            ))}
        </ImagesWrapper>
        <SubTitle
          mainText="Previous Personal Websites"
          description="Follow the journey of my personal portfolios"
        />
        <ImagesWrapper>
          {data.map((x) => (
            <ImageDivWide>
              <StyledLink
                href={x.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Overlay>{x.name}</Overlay>
              </StyledLink>
              <Image src={x.imageUrl} />
            </ImageDivWide>
          ))}
        </ImagesWrapper>
      </Container>
    </div>
  );
};

export default Projects;
