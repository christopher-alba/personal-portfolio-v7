import { FC } from "react";
import { MainDiv } from "./styled";

const SummaryCard: FC<{
  topLabel: string;
  mainTitle: string;
  subTitles: string[];
  mainTexts: string[];
  inverted: boolean;
}> = ({ topLabel, mainTexts, mainTitle, subTitles, inverted }) => {
  return (
    <MainDiv inverted={inverted} className="carouselItem">
      <h3>{topLabel}</h3>
      <h2>{mainTitle}</h2>
      {subTitles.map((x) => (
        <h4>{x}</h4>
      ))}
      {mainTexts.map((x) => (
        <p>{x}</p>
      ))}
    </MainDiv>
  );
};

export default SummaryCard;
