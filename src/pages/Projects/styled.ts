import styled from "styled-components";
export const ImagesWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  border: 5px solid ${({theme}) => theme.colors.secondary1};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
export const ImageDiv = styled("div")`
  aspect-ratio: 1/1;
  flex-grow: 1;
  width: 25%;
  @media (max-width: 800px){
    width: 50%;
  }
  box-sizing: border-box;
  position: relative;
  text-align: center;
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
  background: ${({theme}) => theme.colors.primary1 + "DD"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.secondary1};
  font-weight: 700;
`;
