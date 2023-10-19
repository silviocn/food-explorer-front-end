import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 16px;
  margin-right: 18px;
  place-self: end;
  
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    
    transition: transform 0.5s;
  }
  svg:hover {
    transform: scale(1.5)
  }
`;