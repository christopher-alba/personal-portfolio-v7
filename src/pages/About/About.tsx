import { FC } from "react";
import HeroArea from "../../components/HeroArea";
import SubTitle from "../../components/SubTitle";
import { Container } from "../../components/Container";
import Carousel from "../../components/Carousel/Carousel";
import summaryData from "./summaryData";
import SummaryCard from "./SummaryCard";

const About: FC = () => {
  return (
    <div>
      <HeroArea
        pageTitle="About"
        pageSubTitles={[
          "Find out what makes me tick.",
          "Learn what I’m good at.",
          "Decide if I fit your culture.",
        ]}
        imageUrl="./images/grad-photo-web.png"
      />
      <Container className="aboutContainer">
        <SubTitle
          mainText="Summary Cards"
          description="Learn some interesting things about me"
        />
        <Carousel relativeContainerName="aboutContainer">
          {summaryData.map((x, index) => (
            <SummaryCard
              inverted={index % 2 === 0}
              mainTexts={x.mainTexts}
              mainTitle={x.mainTitle}
              subTitles={x.subTitles}
              topLabel={x.topLabel}
            ></SummaryCard>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default About;
