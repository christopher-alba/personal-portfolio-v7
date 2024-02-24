import styled from "styled-components";

export const FooterMain = styled("div")`
  background: ${({ theme }) => theme.colors.secondary1};
  padding: 20px;
  margin-top: 100px;
`;

export const Text = styled("h2")`
  color: ${({ theme }) => theme.colors.primary1};
  font-size: 1.0rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
`;
