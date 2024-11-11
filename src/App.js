import { ThemeProvider } from "styled-components";
import Layout from "./components/common/layout/Layout.tsx";

import Home from "./pages/Home.tsx";
import { light, dark, getTheme } from "./style/theme.ts";
import ThemeSwitcher from "./components/header/ThemeSwitcher.tsx";
import { useContext, useState } from "react";
import { GlobalStyle } from "./style/global.ts";
import { ThemeContext } from "./context/themeContext.tsx";

function App() {
  const themeName = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        <ThemeSwitcher themeName={themeName} setThemaName={() => {}} />
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
