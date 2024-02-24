import { FC } from "react";
import HeroArea from "../../components/HeroArea";

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
    </div>
  );
};

export default Projects;
