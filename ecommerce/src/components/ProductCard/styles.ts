import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const MovieImage = styled.img`
  width: 188px;
  border-radius: 8px;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const Amount = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 40px;
`