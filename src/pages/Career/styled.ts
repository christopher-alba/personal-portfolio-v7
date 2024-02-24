import styled, { css } from "styled-components";

const commonStyles = css`
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 30px;
  flex-grow: 1;
  max-width: calc(50% - 2 * 10px);
  box-sizing: border-box;
  margin: 10px;
  @media (max-width: 800px){
    max-width: 100%;
  }
`;

export const Card = styled("div")`
  background: ${({ theme }) => theme.colors.primary1};
  color: ${({ theme }) => theme.colors.secondary1};
  ${commonStyles}
`;
export const CardInverted = styled("div")`
  background: ${({ theme }) => theme.colors.secondary1};
  color: ${({ theme }) => theme.colors.primary1};
  ${commonStyles}
`;

export const CardsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;
