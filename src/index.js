import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "sanitize.css";
import { ThemeContext } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeContext.Provider value="dark">
      <App />
    </ThemeContext.Provider>
  </>
);
