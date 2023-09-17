// src/App.tsx
import React, { useEffect, useState } from "react";
import {} from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import {
  ltrLightTheme,
  ltrDarkTheme,
  rtlLightTheme,
  rtlDarkTheme,
} from "./themes";

import Header from "./components/Header";
import { Language } from "./interfaces";
import { languages } from "./utils";

type ThemeName = "ltr-light" | "ltr-dark" | "rtl-light" | "rtl-dark";

type ThemeObject = typeof ltrLightTheme;

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("ltr-light");
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const theme: any = `${language.direction}-${
      isDarkTheme ? "dark" : "light"
    }`;
    setCurrentTheme(theme);
  }, [isDarkTheme, language]);

  const themes = {
    "ltr-light": ltrLightTheme,
    "ltr-dark": ltrDarkTheme,
    "rtl-light": rtlLightTheme,
    "rtl-dark": rtlDarkTheme,
  };

  const selectedTheme: ThemeObject = themes[currentTheme];

  return (
    <>
      <ThemeProvider theme={selectedTheme}>
        <Header
          selectedLanguage={language}
          isDarkTheme={isDarkTheme}
          onLanguageChange={setLanguage}
          onThemeToggle={() => setIsDarkTheme((prev) => !prev)}
        />
      </ThemeProvider>
    </>
  );
};

export default App;
