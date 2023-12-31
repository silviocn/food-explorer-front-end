import styled from 'styled-components'

export const Container = styled.button`
background: none;
border: none;

.buttonDark {
  background-color: ${({theme}) => theme.COLORS.RED_100};
  color: ${({theme}) => theme.COLORS.WHITE_200};
  width: 216px;
  height: 48px;
  border: 0;
  font-size: 14px;
  padding: 0 15px;  
  border-radius: 5px;
  font-weight: 500;
  font-family: 'Poppins';
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  svg {
    width: 26px;
    height: 22px;
  }
  &:disabled{
    opacity: 0.5;
  }
  @media (max-width: 820px) { // Ipad Air
    width: 152px;
    height: 36px;
  }
}
.buttonLight {
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.WHITE_200};
  
  width: 216px;
  height: 56px;
  border: 0;
  font-size: 14px;
  padding: 0 5px;  
  border-radius: 5px;
  font-weight: 500;
  font-family: 'Poppins';
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  svg {
    width: 26px;
    height: 22px;
  }
  &:disabled{
    opacity: 0.5;
  }
}
  
`;