import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import { convertHexToRGBA } from './helpers';

export const styledTheme = {
  colors,
  convertHexToRGBA,
};

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.palette.grayDark};
  }
`;

export default GlobalStyle;
