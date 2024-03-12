import styled from "styled-components";
export const ImagesWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  border-radius: 15px;
`;
export const ImageDiv = styled("div")`
  margin: 10px;
  aspect-ratio: 1/1;
  flex-grow: 1;
  overflow: hidden;
  width: 20%;
  @media (max-width: 800px) {
    width: 40%;
  }
  box-sizing: border-box;
  position: relative;
  text-align: center;
  box-shadow: ${({ theme }) => theme.colors.secondary1 + "15"} 0px 13px 27px -5px,
    ${({ theme }) => theme.colors.secondary1 + "15"} 0px 8px 16px -8px;
  background: ${({ theme }) => theme.colors.primary1};
`;

export const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 500ms;
  &:hover {
    opacity: 0;
  }
  background: ${({ theme }) => theme.colors.primary1 + "DD"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary1};
  font-weight: 700;
`;
