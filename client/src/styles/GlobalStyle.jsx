import { createGlobalStyle } from "styled-components";
import Backgorund from '../images/background.png'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Dancing+Script&family=Montserrat&family=Prompt:wght@200&family=Quicksand&display=swap');

:root{
    --lightwhite-color: #d8d2d2;
    --white-color:#B6ADA7;
    --darkbrown-color:#67271D;
    --black-color:#120E10;
    --darkgray-color:#483E41;
    --lightnude-color:#A18278;
    --nude-color:#9A6758;
}
*{
    font-family: 'Quicksand', sans-serif;
    text-decoration: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background-image: url(${Backgorund});
}
img {
  width: 95%;
  object-fit: contain;
}
main{
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

::-webkit-scrollbar {
    display: none;
}

`;

export default GlobalStyle;
