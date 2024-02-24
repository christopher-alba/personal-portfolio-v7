import { FC, useContext } from "react";
import HeroArea from "../../components/HeroArea";
import SubTitle from "../../components/SubTitle";
import { Container } from "../../components/Container";
import { data } from "./data";
import { Card, CardInverted, CardsWrapper } from "./styled";
import { ThemeContext } from "styled-components";

const Career: FC = () => {
  const theme = useContext(ThemeContext);
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
      <Container>
        <SubTitle
          mainText="Permanent Software Engineer"
          description="Where I continuously learn about developing scaling software"
        />
        <CardsWrapper>
          {data
            .filter((x) => x.type === "Work")
            .map((x) => (
              <Card>
                <h3>{x.name}</h3>
                <h2>{x.position}</h2>
                <h4
                  style={{
                    color: x.dateString.includes("Present")
                      ? theme?.colors.tertiary1
                      : "",
                  }}
                >
                  {x.dateString}
                </h4>
                <p>{x.summary}</p>
              </Card>
            ))}
        </CardsWrapper>
        <SubTitle
          mainText="Internships"
          description="Where I first learned about production grade software"
        />
        <CardsWrapper>
          {data
            .filter((x) => x.type === "Internship")
            .map((x) => (
              <CardInverted>
                <h3>{x.name}</h3>
                <h2>{x.position}</h2>
                <h4>{x.dateString}</h4>
                <p>{x.summary}</p>
              </CardInverted>
            ))}
        </CardsWrapper>
      </Container>
    </div>
  );
};

export default Career;
