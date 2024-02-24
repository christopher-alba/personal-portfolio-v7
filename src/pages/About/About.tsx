import { FC } from "react";
import HeroArea from "../../components/HeroArea";
import SubTitle from "../../components/SubTitle";
import { Container } from "../../components/Container";

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
      <Container>
        <SubTitle
          mainText="Summary Cards"
          description="Learn some interesting things about me"
          style={{ marginTop: "150px" }}
        />
      </Container>
    </div>
  );
};

export default About;
