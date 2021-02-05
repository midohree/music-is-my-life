import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Noto Sans KR', cursive, sans-serif;
    overflow: hidden;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  .root {
    width: 100%;
    height: 100%;
  }
`;
