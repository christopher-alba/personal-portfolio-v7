import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import themes from "./themes/schema.json";
import { GlobalStyles } from "./themes/globalStyles";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";

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
      </Routes>
    </ThemeProvider>
  );
};

export default App;
