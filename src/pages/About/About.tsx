import { FC } from "react";
import HeroArea from "../../components/HeroArea";

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
    </div>
  );
};

export default About;
