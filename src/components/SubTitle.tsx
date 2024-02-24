import { CSSProperties, FC } from "react";
import styled from "styled-components";

const StyledTitle = styled("h2")`
  font-size: 2rem;
  @media (max-width: 600px) {
    font-size: calc(2rem * 0.5);
  }
  @media (max-width: 600px) {
    margin-top: 50px;
  }
  margin-top: 150px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary1};
`;

const TextSpan = styled("span")`
  color: ${({ theme }) => theme.colors.secondary3 + "69"};
`;
const PeriodSpan = styled("span")`
  color: ${({ theme }) => theme.colors.tertiary1};
`;

const SubTitle: FC<{
  mainText: string;
  description: string;
  style?: CSSProperties;
}> = ({ mainText, description, style }) => {
  return (
    <StyledTitle style={style}>
      {mainText}. <TextSpan>{description}</TextSpan>
      <PeriodSpan>.</PeriodSpan>
    </StyledTitle>
  );
};

export default SubTitle;
