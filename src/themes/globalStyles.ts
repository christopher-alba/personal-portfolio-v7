import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  #root-wrapper{
    overflow-x:hidden;
  }
  p {
    font-weight: 200;
  }
  body {
    overflow-x:hidden;
    background: ${({ theme }) => theme.colors.primary2};
    color: ${({ theme }) => theme.colors.secondary1} !important;
    font-family: "Inter", Helvetica, sans-serif;
    margin:0;
    &::-webkit-scrollbar-track
    {
      background-color: ${({ theme }) => theme.colors.primary1};
    }

    &::-webkit-scrollbar
    {
      width: 15px;
      background-color: ${({ theme }) => theme.colors.primary1};
    }
    &::-webkit-scrollbar-thumb
      {
          background-color: ${({ theme }) => theme.colors.secondary1};;
          border-radius:10px;
          border: 3px solid ${({ theme }) => theme.colors.primary1};
      }
  }
  button {
    font-family: "Inter", Helvetica, sans-serif;
    text-transform: capitalize;
  }
`;
