import { createContext } from "react";
import { ThemeName } from "../style/theme";

export const ThemeContext = createContext<ThemeName>("light");
