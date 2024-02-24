import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import themes from "./themes/schema.json";
import { GlobalStyles } from "./themes/globalStyles";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import Footer from "./components/Footer/Footer";
import Project from "./pages/Project/Project";

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
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")?.length ?? -1 > 0
      ? JSON.parse(localStorage.getItem("theme") as string)
      : themes.light
  );

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", JSON.stringify(themes.light));
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectName" element={<Project />} />
      </Routes>
      <VanishingArea />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
