import { FC } from "react";
import HeroArea from "../../components/HeroArea";

const Career: FC = () => {
  return (
    <div>
      <HeroArea
        pageTitle="Career"
        pageSubTitles={[
          "Learn where I started off.",
          "Find out where I am now.",
          "Its been a great journey so far.",
        ]}
        imageUrl="./images/grad-photo-web-2.png"
      />
    </div>
  );
};

export default Career;
