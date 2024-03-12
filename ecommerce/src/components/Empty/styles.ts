import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  height: calc(100vh - 120px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  text-align: center;
`;

export const Image = styled.img`
  width: 90%;
  max-width: 178.33px;
  height: 264px;
`;

export const Divider = styled.div`
  max-width: 447px;
  width: 70%;
  border: 1.36px solid #3F3D56; 
  margin-top: -24px;
`

export const ButtonContainer = styled.div`
  width: 173px;
  height: 40px;
`

