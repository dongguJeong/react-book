import React, { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { getTheme, ThemeName } from "../style/theme.ts";
import "sanitize.css";
import { GlobalStyle } from "../style/global.ts";

const DEFAULT_THEME_NAME = "light";
const THEME_LOCAL_STORAGE_KEY = "book_store_theme";
interface State {
  themeName: ThemeName;
  toggleTheme: () => void;
}

const state = {
  themeName: DEFAULT_THEME_NAME as ThemeName,
  toggleTheme: () => {},
};
export const ThemeContext = createContext<State>(state);

export const BookStoreThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [themeName, setThemeName] = useState<ThemeName>("dark");
  const toggleTheme = () => {
    setThemeName(
      themeName === DEFAULT_THEME_NAME ? "dark" : DEFAULT_THEME_NAME
    );
    localStorage.setItem(
      THEME_LOCAL_STORAGE_KEY,
      themeName === DEFAULT_THEME_NAME ? "dark" : DEFAULT_THEME_NAME
    );
  };

  useEffect(() => {
    const savedThemeName = localStorage.getItem(
      THEME_LOCAL_STORAGE_KEY
    ) as ThemeName;

    setThemeName(savedThemeName || DEFAULT_THEME_NAME);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
