import { FC, useEffect, useState } from "react";
import { MainDiv, NavLink, Underline } from "./styled";
import { useLocation } from "react-router-dom";
import useWindowWidth from "../../../hooks/useWindowWidth";

const NavLinksVertical: FC = () => {
  const [height, setHeight] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const location = useLocation();
  const windowWidth = useWindowWidth();
  const applyStylesToUnderline = (buttonClassName: string) => {
    let button = document.getElementsByClassName(
      buttonClassName
    )[0] as HTMLElement;

    let heightVar = button.getBoundingClientRect().height;
    let yPosVar = button.offsetTop;

    setHeight(heightVar + "px");
    setYPos(yPosVar + "px");
  };
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        applyStylesToUnderline("aboutLinkMobile");
        break;
      case "/career":
        applyStylesToUnderline("careerLinkMobile");
        break;
      case "/projects":
        applyStylesToUnderline("projectsLinkMobile");
        break;
    }
  }, [location, windowWidth]);
  return (
    <MainDiv>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <NavLink
          isActive={location.pathname === "/"}
          className="aboutLinkMobile"
          to="/"
        >
          About
        </NavLink>
        <NavLink
          isActive={location.pathname === "/career"}
          className="careerLinkMobile"
          to="/career"
        >
          Career
        </NavLink>
        <NavLink
          isActive={location.pathname === "/projects"}
          className="projectsLinkMobile"
          to="/projects"
        >
          Projects
        </NavLink>
      </div>
      <Underline
        style={{ position: "absolute", left: 0 }}
        $height={height}
        $yPos={yPos}
      ></Underline>
    </MainDiv>
  );
};

export default NavLinksVertical;
