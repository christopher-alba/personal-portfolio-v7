import { useState, useEffect } from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import Footer from "./components/Footer/Footer";
import Project from "./pages/Project/Project";
import { client } from "./main";
import { Entry } from "contentful";

const VanishingArea = styled("div")`
  height: 50px;
  width: 100%;
  position: sticky;
  bottom: 0;
  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.colors.primary2} 0%,
    rgba(0, 212, 255, 0) 100%
  );
`;

const App = () => {
  const [contentful, setContentful] = useState<Entry>();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")?.length ?? -1 > 0
      ? JSON.parse(localStorage.getItem("theme") as string)
      : (contentful?.fields.themes as DefaultTheme)?.light
  );

  useEffect(() => {
    client
      .getEntry("65AeUYg4df2Hwani5B8h6g")
      .then((entry) => {
        console.log(entry);
        setContentful(entry);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("theme") && contentful !== undefined) {
      console.log(contentful);
      localStorage.setItem(
        "theme",
        JSON.stringify((contentful?.fields.themes as DefaultTheme).light)
      );
      setTheme((contentful?.fields.themes as DefaultTheme).light);
    }
  }, [contentful]);

  if (contentful === undefined || theme === undefined) return;

  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <GlobalStyles />
      <Navbar setTheme={setTheme} contentful={contentful} />
      <Routes>
        <Route path="/" element={<About contentful={contentful} />} />
        <Route path="/career" element={<Career contentful={contentful} />} />
        <Route
          path="/projects"
          element={<Projects contentful={contentful} />}
        />
        <Route
          path="/projects/:projectName"
          element={<Project contentful={contentful} />}
        />
      </Routes>
      <VanishingArea />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
