import { createGlobalStyle } from "styled-components";
import background from "./img/background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-image:  linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url("${background}");
    background-blend-mode: hard-light;
    background-size: cover;
  }
`;