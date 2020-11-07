import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
  * {
   box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100vw;
    position: relative;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    //overflow: hidden;
  }
`
