import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        font-size: 15px;
        font-family: "Nunito", sans-serif;
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
        min-height: 100vh;
        background-color: #F8F8F8;
        max-width: 100vw;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 8px;
        }
        
        &::-webkit-scrollbar-track {
            background: #FFD1DD;
        }
        
        &::-webkit-scrollbar-thumb {
            background: #9A1032;
            border-radius: 4px;
        }
        
        &::-webkit-scrollbar-thumb:hover {
            background: #6d0822;
        }
    }
`