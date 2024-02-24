import styled from "styled-components";
type MainDivProps = {
  inverted: boolean;
};
export const MainDiv = styled("div")<MainDivProps>`
  background: ${({ theme, inverted }) =>
    inverted ? theme.colors.primary1 : theme.colors.secondary1};
  color: ${({ theme, inverted }) =>
    !inverted ? theme.colors.primary1 : theme.colors.secondary1};
  width: 300px;
  display: inline-block;
  border-radius: 15px;
  white-space: normal;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
