import {
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  CarouselSingle,
  Circle,
  ControlButtons,
  MainDiv,
} from "./styled";
import Draggable from "react-draggable";
import useWindowWidth from "../../hooks/useWindowWidth";
import { ThemeContext } from "styled-components";

const Carousel: FC<{
  children: ReactNode[];
  relativeContainerName: string;
}> = ({ children, relativeContainerName }) => {
  const [boundsRight, setBoundsRight] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const windowWidth = useWindowWidth();
  const theme = useContext(ThemeContext);
  useEffect(() => {
    let lastItem = document.getElementsByClassName("carouselItem")[
      document.getElementsByClassName("carouselItem").length - 1
    ] as HTMLElement;
    let container = document.getElementsByClassName(relativeContainerName)[0];

    const boundsRight =
      -container.getBoundingClientRect().right +
      lastItem.getBoundingClientRect().right;

    setBoundsRight(boundsRight);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  if (windowWidth > 600)
    return (
      <>
        <Draggable
          axis="x"
          bounds={{ left: -boundsRight, right: 0 }}
          grid={[250, 250]}
        >
          <MainDiv>{children.map((x) => x)}</MainDiv>
        </Draggable>
      </>
    );

  return (
    <>
      <CarouselSingle>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <ControlButtons onClick={prevImage}>↑</ControlButtons>
            <ControlButtons onClick={nextImage}>↓</ControlButtons>
          </div>
          <div>
            {children.map((_, index) => (
              <Circle
                onClick={() => {
                  setCurrentImageIndex(index);
                }}
                style={{
                  background:
                    currentImageIndex === index
                      ? theme?.colors.tertiary1
                      : theme?.colors.secondary3,
                }}
              ></Circle>
            ))}
          </div>
        </div>

        {children[currentImageIndex]}
      </CarouselSingle>
    </>
  );
};

export default Carousel;
