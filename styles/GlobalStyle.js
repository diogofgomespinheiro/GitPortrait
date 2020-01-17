import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Roboto";
  }

  html, body, #__next, main {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary}
  }
`;

export default GlobalStyle;