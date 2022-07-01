import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore
import BGImage from  './assets/images/leaf.jpg'

export const GlobalStyle = createGlobalStyle `
    html{
        height: 100%
    }
    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center
    }

    *{
        box-sizing: border-box
        font-family: sans-serif;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >p{
        color #fff;
    }

    .score{
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1{
        background-image: linear-gradient(180deg, #fff, #CED89E);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        font-size: 70px;
        font-weight: 700;
        text-align: center;
        margin: 20px;
    }

    .start, .next{
        cursor: pointer;
        background: linear-gradient(180deg, #DCD7C9, #ADCF9F);
        border: 2px solid #C4DFAA;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start{
        max-width: 200px;
    }
`