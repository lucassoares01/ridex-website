import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        scroll-behavior: smooth;
    }

    :root{
        font-size: 10px;
    }

    body{
        background: ${({theme}) => theme.colors.bg};
        font-family: 'Poppins';
        position: relative;
        overflow-x: hidden;
        max-width: 100vw;
    }

    .container{
        width: 1180px;
    }

    .section-title{
        font-size: 28px;
        font-weight: 500;
        color: ${({theme}) => theme.colors.darkBlue};
    }

    .section-title h2{
        font-size: 28px;
    }

    @media (max-width: 1180px){
        .container{
            width: 100%;
            padding: 0 10px 0px 10px;
            margin: auto;
        }
    }

    @media (max-width: 768px) {
        .section-title{
            text-align: center;
        }
    }
`