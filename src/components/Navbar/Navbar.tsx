import { FC, useContext, useEffect, useState } from "react";
import {
  Brand,
  MainDiv,
  Menu,
  MenuButton,
  MenuWrapper,
  PrimaryDiv,
  ResumeButton,
  SecondaryDiv,
  ShowNavButton,
  ThemeSwitcher,
} from "./styled";
import { Container } from "../Container";
import { DefaultTheme, ThemeContext } from "styled-components";
import NavLinks from "./NavLinks";
import NavLinksVertical from "./NavLinksVertical";
import { Entry } from "contentful";
import { useWindowScroll } from "../../hooks/useWindowScroll";

const Navbar: FC<{
  setTheme: (theme: DefaultTheme) => void;
  contentful: Entry;
}> = ({ contentful, setTheme }) => {
  const [displayNavbar, setDisplayNavbar] = useState(true);
  const [displayMenu, setDisplayMenu] = useState(false);
  const theme = useContext(ThemeContext);
  const [scrollDir, scrollOffset] = useWindowScroll();

  useEffect(() => {
    if (scrollDir === "down") {
      if (displayNavbar === true) setDisplayNavbar(false);
    } else {
      if (displayNavbar === false) setDisplayNavbar(true);
    }
  }, [scrollDir, scrollOffset]);

  const toggleTheme = () => {
    if (theme?.name === "light") {
      localStorage.setItem(
        "theme",
        JSON.stringify((contentful.fields.themes as DefaultTheme).dark)
      );
      setTheme((contentful.fields.themes as DefaultTheme).dark);
    } else {
      localStorage.setItem(
        "theme",
        JSON.stringify((contentful.fields.themes as DefaultTheme).light)
      );
      setTheme((contentful.fields.themes as DefaultTheme).light);
    }
  };
  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };
  const displayNav = () => {
    setDisplayNavbar(true);
  };
  return (
    <>
      {!displayNavbar && (
        <ShowNavButton onClick={displayNav} onMouseEnter={displayNav}>
          <Menu />
        </ShowNavButton>
      )}
      <div
        style={{
          position: "fixed",
          width: "100%",
          top: displayNavbar ? 0 : "-200px",
          zIndex: 1000,
          transition: "500ms",
        }}
      >
        <MainDiv>
          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "70px",
            }}
          >
            <PrimaryDiv>
              <Brand>
                Christopher{" "}
                <span style={{ color: theme?.colors.tertiary1 }}>Alba</span>
              </Brand>
              <NavLinks />
            </PrimaryDiv>
            <SecondaryDiv>
              <ResumeButton
                to={(contentful.fields.cv as any).fields.file.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </ResumeButton>
              <ThemeSwitcher onClick={toggleTheme}>Switch Theme</ThemeSwitcher>
            </SecondaryDiv>
            <MenuButton onClick={toggleMenu}>
              <Menu />
            </MenuButton>
          </Container>
        </MainDiv>
        {displayMenu && (
          <MenuWrapper>
            <Container>
              <NavLinksVertical />
              <ResumeButton
                to={(contentful.fields.cv as any).fields.file.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </ResumeButton>
              <ThemeSwitcher onClick={toggleTheme}>Switch Theme</ThemeSwitcher>
            </Container>
          </MenuWrapper>
        )}
      </div>
    </>
  );
};

export default Navbar;
