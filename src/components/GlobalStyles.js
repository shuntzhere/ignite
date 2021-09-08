import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        } 
    }
    body {
        font-family: 'Raleway', sans-serif;
    }
    h2 {
        font-size: 3rem;
        font-family: 'Cinzel', serif;
        font-weight: 700;
        color: darkgreen;
    }
    h3 {
        font-size: 1.2rem;
        color: #333;
        padding: 0.5rem 0rem;
    }
    p {
        font-size: 1.1rem;
        line-height: 200%;
        color: grey;
    }
    a {
        text-decoration: none;
        color: #333;
        cursor: pointer;
    }
`

