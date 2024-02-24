import { FC, useEffect, useState } from "react";
import { MainDiv, NavLink, Underline } from "./styled";
import { useLocation } from "react-router-dom";
import useWindowWidth from "../../../hooks/useWindowWidth";

const NavLinks: FC = () => {
  const [width, setWidth] = useState("0px");
  const [xPos, setXPos] = useState("0px");
  const location = useLocation();
  const windowWidth = useWindowWidth();
  const applyStylesToUnderline = (buttonClassName: string) => {
    let button = document.getElementsByClassName(
      buttonClassName
    )[0] as HTMLElement;
    let width = button.getBoundingClientRect().width;
    let xPos = button.offsetLeft;
    setWidth(width + "px");
    setXPos(xPos + "px");
  };
  useEffect(() => {
    if (location.pathname.includes("projects")) {
      applyStylesToUnderline("projectsLink");
    } else {
      switch (location.pathname) {
        case "/":
          applyStylesToUnderline("aboutLink");
          break;
        case "/career":
          applyStylesToUnderline("careerLink");
          break;
      }
    }
  }, [location, windowWidth]);
  return (
    <MainDiv>
      <div style={{ boxSizing: "border-box", height: "100%", display: "flex" }}>
        <NavLink className="aboutLink" to="/">
          About
        </NavLink>
        <NavLink className="careerLink" to="/career">
          Career
        </NavLink>
        <NavLink className="projectsLink" to="/projects">
          Projects
        </NavLink>
      </div>
      <Underline
        style={{ position: "absolute", bottom: 0 }}
        $width={width}
        $xPos={xPos}
      ></Underline>
    </MainDiv>
  );
};

export default NavLinks;
