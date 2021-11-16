import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  html, body, #root {
    height: 100%;
  }

  html {
    // 10px
    font-size: 62.5%;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    outline: 0;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
