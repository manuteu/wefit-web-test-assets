import styled from 'styled-components';

export const Container = styled.header`
  height: 88px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: inherit;
  max-width: 1048px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    padding: 0px 16px;
  }
`;

export const Logo = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const CartContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CartTitle = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMI_BOLD};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const CartSubtitle = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMI_BOLD};
`;

export const CartIcon = styled.img`
  cursor: pointer;
  padding-right: 8px;
`;
