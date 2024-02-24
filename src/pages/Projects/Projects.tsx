import { FC } from "react";
import HeroArea from "../../components/HeroArea";
import SubTitle from "../../components/SubTitle";
import { Container } from "../../components/Container";
import { Type, projects } from "./data";
import { Link } from "react-router-dom";
import { Image, ImageDiv, ImagesWrapper, Overlay } from "./styled";

const Projects: FC = () => {
  return (
    <div>
      <HeroArea
        pageTitle="Projects"
        pageSubTitles={[
          "Most of these were done during university.",
          "A showcase of my skills through hobby development.",
        ]}
        imageUrl="./images/projects.png"
      />
      <Container>
        <SubTitle
          mainText="During University"
          description="Projects outside the curriculum"
        />
        <ImagesWrapper>
        {projects
          .filter((x) => x.type === Type.UNIVERSITY)
          .map((x) => (
            <ImageDiv>
              <Link
                to={{ pathname: `/projects/${x.name.replaceAll(" ", "")}` }}
                state={x}
                style={{display: "block"}}
              >
                <Overlay>
                  {x.name}
                </Overlay>
              </Link>
                <Image src={x.imgSrc} />
            </ImageDiv>
          ))}
      </ImagesWrapper>
      </Container>
      
    </div>
  );
};

export default Projects;
