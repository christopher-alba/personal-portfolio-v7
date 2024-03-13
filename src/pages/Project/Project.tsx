import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Project as ProjectType } from "../Projects/data";
import { Container } from "../../components/Container";
import {
  Anchor,
  ButtonsWrapper,
  ContentWrapper,
  GithubButton,
  ImageWrapper,
  MainBackgroundDiv,
  Overlay,
  PageSubTitle,
  PageTitle,
  PageTitlePeriod,
  Pill,
  PillsWrapper,
  StyledRouterLink,
  TechPill,
} from "./styled";
import { Entry } from "contentful";

const Project: FC<{ contentful?: Entry }> = (contentful) => {
  const [state, setState] = useState<ProjectType>();
  const location = useLocation();
  useEffect(() => {
    if (!location.state) {
      var project = (
        contentful?.contentful?.fields?.projects as ProjectType[]
      ).filter((x) => {
        return (
          x.name.replaceAll(" ", "").toLowerCase() ===
          location.pathname.split("/")[2].replaceAll(" ", "").toLowerCase()
        );
      })[0];
      setState(project);
    } else {
      setState(location.state);
    }
  }, [location]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!state) {
    return (
      <MainBackgroundDiv>
        <Container>
          <ContentWrapper>
            <PageTitle>
              404 Not Found
              <PageTitlePeriod>.</PageTitlePeriod>
            </PageTitle>

            <PageSubTitle>
              The project with the name "
              {location.pathname.split("/")[2].replaceAll(" ", "")}" could not
              be found.
            </PageSubTitle>
          </ContentWrapper>
        </Container>
        <ImageWrapper>
          <Overlay />
          <img
            src="/images/grad-photo-web.png"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </ImageWrapper>
      </MainBackgroundDiv>
    );
  }
  return (
    <div>
      <MainBackgroundDiv>
        <Container>
          <ContentWrapper>
            <StyledRouterLink to="/projects">
              ← Back to projects
            </StyledRouterLink>
            <PageTitle>
              {state?.name}
              <PageTitlePeriod>.</PageTitlePeriod>
            </PageTitle>

            <PageSubTitle>{state?.short}</PageSubTitle>
            <p>{state?.description}</p>
            <ButtonsWrapper>
              {state?.download ? (
                <Anchor href={state.download}>Download</Anchor>
              ) : (
                <Anchor href={state?.website}>Visit </Anchor>
              )}

              {state?.github.map((x) => (
                <GithubButton href={x.url}>Github - {x.type}</GithubButton>
              ))}
            </ButtonsWrapper>
            <PillsWrapper style={{ marginTop: "50px" }}>
              {state?.devices.map((x) => (
                <Pill>{x}</Pill>
              ))}
            </PillsWrapper>
            <PillsWrapper style={{ marginTop: "50px" }}>
              {state?.tags.map((x) => (
                <TechPill>{x}</TechPill>
              ))}
            </PillsWrapper>
          </ContentWrapper>
        </Container>
        <ImageWrapper>
          <Overlay />
          <img
            src={state?.imgSrc}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </ImageWrapper>
      </MainBackgroundDiv>
    </div>
  );
};

export default Project;
