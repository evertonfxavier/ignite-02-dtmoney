import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;

        --blue-light: #6933ff;
        
        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; 
            /* 15px */

        }

        @media (max-width: 720px){
            font-size: 87.5%; 
            /* 16x0,875 =  14px */
        }

        /* REM = 1rem = tamanho do font-size da minha página. se o font-size da minha págnia for 16px, meu 1rem vai ser 16px. */
    }

    body {
        background: var(--background);
        --webkit-font-smooth: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;
