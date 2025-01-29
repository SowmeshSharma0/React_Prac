import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${({theme}) => theme.colorsLight.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
    }

    /* h1, h2, h3, h4, h5, h6 {
        color: #333;
        margin: 0;
    } */

    p {
        color: #333;
        margin: 1.5rem 0;
        opacity: 0.6;
        line-height: 1.5;
    }

    img{
        max-width: 100%;
    }
`