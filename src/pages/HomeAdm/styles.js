import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Links = styled(Link)`
  padding: 0.2rem 1rem;
  display: flex;
  margin-left: -10px;
  border-left: none;
  font-style: italic;
  color: ${({ theme }) => theme.COLORS.WHITE_100};
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem; // alterado
  grid-template-areas: "header" "content" "footer";
  main::-webkit-scrollbar {
  width: 2rem;
  }
  main::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 2rem;
  width: 0.1rem;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 0.5rem solid rgba(0, 0, 0, 0);
  }
  main::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 2rem;
  width: 0.1rem;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 0.5rem solid rgba(0, 0, 0, 0);
  }
  main {
    width: 100%;
    grid-area: content;
    overflow: auto;
    
  .none {
    display: none;
  }
  #title{
    padding: 4.8rem 12.5rem 4rem;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    animation: right 1s;
  @keyframes right {
      0% {
        opacity: 0;
        transform: translateX(30px)
      }
      100% {
        opacity: 1;
        transform: translateX(0)
      }
    }
  }
  .logoHome {
    margin: 0 auto;
    margin-top: 8rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    width: 112rem;
    height: 26rem;
    display: flex;
    animation: left 1s;
  @keyframes left {
      0% {
        opacity: 0;
        transform: translateX(-30px)
      }
      100% {
        opacity: 1;
        transform: translateX(0)
      }
    }
    img {
      margin-top: -5rem;
      margin-left: -4rem;
    }
    .addFoods{
    display: flex;
    gap: 0.8rem;
    white-space: nowrap;
    align-items: center;
    span{
      border-radius: 1rem 0 0 0;
      margin-left: 60rem;
      border: 0.1rem solid ${({ theme }) => theme.COLORS.GRAY_300};
      padding: 0.4rem 1rem;
    }
    a{
      padding: 0.4rem 1rem;
      display: flex;
      margin-left: -10px;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
      border-left: none;
      font-style: italic;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    a:last-child{
      border-radius: 0 1rem 1rem 0;
    }
  }
    .requests{
      border-radius: 0 0 1rem 1rem;
      padding: 0.4rem 1rem;
      display: flex;
      margin-left: 60rem;
      margin-top: -0.9px;
      font-style: italic;
      border: 0.1rem solid ${({ theme }) => theme.COLORS.GRAY_300};
      border-top: none;
      
  }
  }
  .logoText{
    margin-left: -50rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: start;
    justify-content: center;
    white-space: nowrap;
  
  
  h1 {
      margin-left: 60rem;
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 4rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    p {
      margin-left: 60rem;
      font-family: 'Poppins';
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 140%;
    }
  }
  .container {
    position: relative;
    margin: 0px 12.5rem;
    height: 51.2rem;
    animation: scale 1s;
 @keyframes scale {
      0% {
        opacity: 0;
        transform: scale(1.2)
      }
      100% {
        opacity: 1;
        transform: scale(1.0)
      }
    }
    .arrowOne{
      width: 8rem;
      height: 512px;
      background:  ${({ theme }) => theme.COLORS.BACKGROUND_000};
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
      cursor: pointer;
      width: 4rem;
      height: 4rem;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    button {
      background: none;
      border: none;
      transition: transform 1s;
    }
    button:hover {
      transform: scale(1.5);
    }
    }
    .arrowTwo{
      position: absolute;
      width: 8rem;
      right: 0;
      height: 51.2rem;
      background:  ${({ theme }) => theme.COLORS.BACKGROUND_300};
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        cursor: pointer;
        width: 4rem;
        height: 4rem;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    button {
      background: none;
      border: none;
      transition: transform 1s;
    }
    button:hover {
      transform: scale(1.5);
    }
    }
  }
  .container:last-child{
    margin-bottom: 6rem;
  }
  }
    .listFood{
      display: flex;
      overflow-x: hidden;
      scroll-behavior: smooth;
      width: 100%;
  }
  .listFoods{
    display: flex;
    flex-direction: row;
    gap: 2.7rem;
    .cardFood{
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      width: 30rem;
      height: 51.2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2{
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins';
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 140%;
        svg {
          width: 3rem;
          height: 3rem;
        }
      }
      p{
        width: 22rem;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 160%;
        margin: 1.8rem auto 0px;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.GRAY_300};

        display: -webkit-box;
        text-overflow: ellipsis; 
        overflow: hidden; 
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
      }
      img {
        border-radius: 50%;
        width: 17.6rem;
        height: 17.6rem;
        margin: 3rem 6.2rem 1.6rem 6.2rem;
      }
      .button {
        margin-top: 2rem;
        background: none;
        border: none;
        svg {
          width: 3rem;
          height: 3rem;
          color: ${({ theme }) => theme.COLORS.GRAY_400};
          transition: transform 0.5s;
        }
      svg:hover {
          transform: scale(1.5)
      }
      }
      svg {
        color: ${({ theme }) => theme.COLORS.WHITE_200};
        width: 1.8rem;
        height: 1.8rem;
    }
    .price {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.BLUE_200};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1.6rem;
      margin-bottom: 1.6rem;
    }
    
  }
  
  }

`;

export const Header = styled.header`
  grid-area: header;
  height: 10.4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.5rem;
  white-space: nowrap;
  animation: topdown 1s;
  @keyframes topdown {
      0% {
        opacity: 0;
        transform: translateY(-20px)
      }
      100% {
        opacity: 1;
        transform: translateY(0)
      }
    }
  a{
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
  .gap {
    display: flex;
    width: 80rem;
    align-items: center;
    gap: 3.2rem;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    padding-right: 3.7rem;
    svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      width: 2.92rem;
      height: 2.92rem;
    }
    span {
      font-family: 'Roboto';
      color: ${({ theme }) => theme.COLORS.WHITE_200};
      font-weight: bold;
      font-size: 2.5rem;
    }
  }
  .buttons {
    display: flex;
    gap: 2rem;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  padding-left: 3.7rem;
  svg {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    width: 2.2rem;
    height: 2.2rem;
  }
`;

export const Input = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  padding: 1.6rem;
  input {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    padding-left: 1.6rem;
    width: 100%;
    background: transparent;
    border: none;
  }
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    width: 1.95rem;
    height: 1.95rem;
  }
`;