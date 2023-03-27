import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:${({ theme }) => theme.fontFamily};
    transition: background .3s ease-in;

  }

  body{
    background: ${({ theme }) => theme.color.color.background};
    font-size: ${({ theme }) => theme.typography.headingS.fontSize};
    max-width: 1440px ;
    width: 100%;
    margin: 0 auto;
    padding: 0px 10px;
  }


`;