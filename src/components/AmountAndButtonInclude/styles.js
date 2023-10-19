import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  place-content: center;
  font-family: 'Poppins';
  font-weight: medium;
  font-size: 20px;
  line-height: 160%;
  color: ${({ theme }) => theme.COLORS.WHITE_100};
`;