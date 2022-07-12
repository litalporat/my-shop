import { createGlobalStyle } from "styled-components";
import backGround from "../imgs/background.png";

const LoginStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Dancing+Script&family=Montserrat&family=Prompt:wght@200&family=Quicksand&display=swap');

:root {
  --yellow: linear-gradient(180deg, #F8D49A -146.42%, #FAD79D -46.42%);
  --orange: #fca61f;
  --black: #242d49;
  --gray: #788097;
  --purple: linear-gradient(180deg, #BB67FF 0%, #C484F3 100%);
  --pink: #FF919D;
  --glass: rgba(255, 255, 255, 0.54);
  --boxShadow: 0px 19px 60px rgb(0 0 0 / 8%);
  --smboxShadow: -79px 51px 60px rgba(0, 0, 0, 0.08);
  --activeItem: #f799a354;
}

*{
  font-family: 'Quicksand', sans-serif;
  margin:1rem;
}

.App {
  color: var(--white);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Inter', sans-serif;
  flex-direction: column;
  max-height: 80vh
}

.AppGlass {
  background-image: url(${backGround});
  gap:10px;
  height: 80%;
  width: 50%;
  border-radius: 2rem;
  justify-content: center;
  grid-template-columns: 15rem auto 15rem;
  overflow: hidden;
}

::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 1200px) {
  .AppGlass{
    grid-template-columns: 10% 50% auto;
    overflow-y: scroll;
  } 
}

@media screen and (max-width: 768px) {
  .AppGlass{
    grid-template-columns: 1fr;
  } 
}
`;

export default LoginStyle;
