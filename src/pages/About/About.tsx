import { FC, useEffect } from "react";
import HeroArea from "../../components/HeroArea";
import SubTitle from "../../components/SubTitle";
import { Container } from "../../components/Container";
import Carousel from "../../components/Carousel/Carousel";
import { SummaryData } from "./summaryData";
import SummaryCard from "./SummaryCard";
import {
  Card,
  Pill,
  PillsWrapper,
  SmallTitle,
  TechWrapperMain,
  TertiaryPeriod,
} from "./styled";
import { Tech, Type } from "./techData";
import { Entry } from "contentful";

const About: FC<{ contentful?: Entry }> = (contentful) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroArea
        pageTitle="About"
        pageSubTitles={[
          "Find out what makes me tick.",
          "Learn what I’m good at.",
          "Decide if I fit your culture.",
        ]}
        imageUrl={
          (contentful.contentful?.fields.aboutImage as any)?.fields?.file?.url
        }
      />
      <Container className="aboutContainer">
        <SubTitle
          mainText="Summary Cards"
          description="Learn some interesting things about me"
        />
        <Carousel relativeContainerName="aboutContainer">
          {(contentful?.contentful?.fields?.summaryCards as SummaryData[])?.map(
            (x, index) => (
              <SummaryCard
                key={index}
                inverted={index % 2 === 0}
                mainTexts={x.mainTexts}
                mainTitle={x.mainTitle}
                subTitles={x.subTitles}
                topLabel={x.topLabel}
              ></SummaryCard>
            )
          )}
        </Carousel>
        <SubTitle
          mainText="Technologies"
          description="I usually use these technologies at work or as a hobby"
        />
        <TechWrapperMain>
          <Card>
            <SmallTitle>
              For Work<TertiaryPeriod>.</TertiaryPeriod>
            </SmallTitle>
            <PillsWrapper>
              {(contentful?.contentful?.fields?.technologies as Tech[])
                .filter((x) => x.type === Type.WORK)
                .sort()
                .map((x) => (
                  <Pill>{x.name}</Pill>
                ))}
            </PillsWrapper>
          </Card>
          <Card>
            <SmallTitle>
              As a Hobby<TertiaryPeriod>.</TertiaryPeriod>
            </SmallTitle>
            <PillsWrapper>
              {(contentful?.contentful?.fields?.technologies as Tech[])
                .filter((x) => x.type === Type.HOBBY)
                .sort()
                .map((x) => (
                  <Pill>{x.name}</Pill>
                ))}
            </PillsWrapper>
          </Card>
        </TechWrapperMain>
      </Container>
    </div>
  );
};

export default About;
