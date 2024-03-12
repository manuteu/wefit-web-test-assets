import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 600px) {
    gap: 21px;
    padding: 16px;
  }
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr 1.2fr 24px;
  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ColumnTitle = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  @media (max-width: 600px) {
    align-items: flex-start;
    gap: 8px;
  }
`;

export const ProductImage = styled.img`
  width: 91px;
  @media (max-width: 600px) {
    width: 64px;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 600px) {
    justify-content: space-between;
    height: 100%;
  }
`;

export const ProductTitle = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const ProductAmount = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ProductCounterMobile = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const ProductCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const CounterIcon = styled.img`
  width: 18px;
  cursor: pointer;
`;

export const CounterBox = styled.div`
  width: 62px;
  height: 26px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 48px;
  }
`;

export const CounterText = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
`;

export const ProductSubTotal = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    min-width: 70px;
    padding-right: 16px;
    justify-content: space-between;
  }
`;

export const SubTotalText = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const SubTotalTextMobile = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  display: none;
  @media (max-width: 600px) {
    display: flex;
  }
`;

export const SubTotalMobile = styled.span`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    min-width: 70px;
  }
`;

export const SubTotalMobileTitle = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const DeleteBox = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    align-items: flex-start;
  }
`;

export const DeleteIcon = styled.img`
  width: 18px;
  cursor: pointer;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 16px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  height: 1px;
`;

export const ButtonContainer = styled.div`
  width: 173px;
  height: 34px;
  @media (max-width: 600px) {
    width: 100%;
    height: 40px;
  }
`;

export const TotalBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 600px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const TotalText = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const TotalAmount = styled.span`
  padding: 0px 16px;
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  @media (max-width: 600px) {
    padding: 0px;
  }
`;
