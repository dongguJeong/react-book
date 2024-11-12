import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext.tsx";

const ThemeSwitcher = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>{themeName}</button>;
};

export default ThemeSwitcher;
