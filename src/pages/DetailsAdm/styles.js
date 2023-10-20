import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 104px 50px auto 77px;
  grid-template-areas: "header" "back" "content" "footer";

`;

export const ButtonText = styled(Link)`
  margin-left: 125px;
  margin-top: 50px;
  width: 100px;
  grid-area: back;  
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
`;

export const Main = styled.main`
  grid-area: content;
  padding: 0 125px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: scale 1s;
  overflow-y: scroll;
  height: 100%;
  @media (max-width: 820px) {
  padding: 0px;
  width: 600px;
  gap: 10px;
 }
 .details {
  display: flex;
  gap: 30px;
  @media (max-width: 820px) {
  flex-direction: column;
 }
 }
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
  .textDetails {
    @media (max-width: 820px) {
  margin-bottom: 50px;
 }
    width: 550px;
  .h1Dark {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 140%;
    margin-bottom: 8px;
  }
  .h1Light {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 140%;
    margin-bottom: 8px;
  }
  .pDark {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 140%;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  .pLight {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 140%;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
  }
}
  .ingredients {
    display: flex;
    align-items: end;
    gap: 16px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 100;
    font-size: 15px;
    line-height: 140%;
    .Dark{
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
    .Light{
    color: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
  }
    margin-bottom: 45px;
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
  }
  .finishBuy {
    display: flex;
    white-space: nowrap;
    align-items: center;
    gap: 50px;
    padding-right: 160px;
  }
  .priceDark {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
  }
  .priceLight {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
  .amount{
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  .image {
    border-radius: 50%;
    width: 300px;
    height: 300px;
    margin-left: 50px;
  }
  svg {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    width: 18px;
    height: 18px;
  }
  .none {
    display: none;
  }
`;

export const Header = styled.header`
  grid-area: header;
  height: 104px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 125px;
  white-space: nowrap;
  animation: topdown 1s;
  @media (max-width: 820px) { // Ipad Air
    height: 120px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: start;
    justify-content: center;
   }
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
    width: 740px;
    align-items: center;
    gap: 32px;
    padding: 12px 14px;
    @media (max-width: 820px) { // Ipad Air
      flex-direction: column;
      width: 30%;
      gap: 10px;
    }
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 11px;
    //padding-right: 37px;
    svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      width: 29.2px;
      height: 29.2px;
    }
    span {
      font-family: 'Roboto';
      color: ${({ theme }) => theme.COLORS.WHITE_200};
      font-weight: bold;
      font-size: 25px;
    }
    h2 {
      font-family: 'Roboto';
      color: ${({ theme }) => theme.COLORS.BLUE_200};
      font-weight: small;
      font-size: 10px;
      position: absolute;
      margin-left: 160px;
      margin-top: 45px;
    }
    @media (max-width: 820px) { // Ipad Air
      gap: 5px;
      padding: 1px;
      svg {
        width: 15px;
        height: 15px;
      }
      span {
        font-size: 15px;
      }
      h2 {
        position: absolute;
        margin-left: 120px;
        margin-top: 5px;
      }
    }
  }
  /*.buttons {
    display: flex;
    gap: 20px;
  }*/
`;

export const Input = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 16px;
  input {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    padding-left: 16px;
    width: 100%;
    background: transparent;
    border: none;
  }
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    width: 19.5px;
    height: 19.5px;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  padding-left: 37px;
  svg {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    width: 22px;
    height: 22px;
  }
  @media (max-width: 820px) { // Ipad Air
    padding: 0px;
  }
`;