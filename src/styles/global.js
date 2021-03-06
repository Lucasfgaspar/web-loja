import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #f5f5f5;
    -webkit-font-smoothing: antialiased !important;

  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  input, button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
