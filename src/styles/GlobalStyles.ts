import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--color-background);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', -apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  }
  :root {
    --color-primary: #2F80ED;
    --color-black: #000;
    --color-white: #FFF;
    --color-light-gray: #aaa;
    --color-gray: #666;
    --color-blue: #3483fa;
    --color-green: #00a650;

    --color-background: #01050B;
    --color-surface: #0F1216;

    --color-search-placeholder: #AAAAAA;
    --color-border: #ddd;

    --panel-shadow: 0 1px 3px 0 rgba(0,0,0,.3);


  }
`;
