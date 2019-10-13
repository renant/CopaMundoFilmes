import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import 'font-awesome/css/font-awesome.min.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    @import url(https://fonts.googleapis.com/css?family=Fira+Sans);
    background:  ${theme.black};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Fira Sans', sans-serif;
  }
`;


export default GlobalStyle;
