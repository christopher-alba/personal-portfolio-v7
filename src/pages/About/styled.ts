import styled from "styled-components";

export const Card = styled("div")`
  background: ${({ theme }) => theme.colors.primary1};
  color: ${({ theme }) => theme.colors.secondary1};
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 30px;
  flex-grow: 1;
  &:first-of-type {
    margin-right: 20px;
  }
  &:last-of-type {
    margin-left: 20px;
  }
  @media (max-width: 800px){
    &:first-of-type {
    margin-right: 0;
  }
  &:last-of-type {
    margin-left: 0;
  }
    margin-top: 30px;
  }
`;

export const TechWrapperMain = styled("div")`
  display: flex;
  @media (max-width: 800px){
    flex-wrap: wrap;
  }
`;

export const SmallTitle = styled("h4")`
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 50px;
  @media (max-width: 800px){
    font-size: 1rem;
  }
`;

export const TertiaryPeriod = styled("span")`
  color: ${({ theme }) => theme.colors.tertiary1};
`;

export const PillsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;
export const Pill = styled("div")`
  background: ${({ theme }) => theme.colors.primary2};
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 10px 30px;
  flex-grow: 1;
  border-radius: 5px;
  @media (max-width: 800px){
    padding: 5px 15px;
    font-size: 0.8rem;
  }
`;
