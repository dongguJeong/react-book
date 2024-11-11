import React from "react";
import { ThemeName } from "../../style/theme";

interface Props {
  themeName: ThemeName;
  setThemaName: (themeName: ThemeName) => void;
}

const ThemeSwitcher = ({ themeName, setThemaName }) => {
  const toggleTheme = () => {
    setThemaName(themeName === "light" ? "dark" : "light");
  };

  return <button onClick={toggleTheme}>{themeName}</button>;
};

export default ThemeSwitcher;
