import styled from 'styled-components';

type Props = {
  hasCounter?: boolean;
}

export const Container = styled.button<Props>`
  height: 100%;
  border-radius: 4px;
  width: 100%;
  border-width: 0px;
  background-color: ${({ theme, hasCounter }) => hasCounter ? theme.COLORS.GREEN : theme.COLORS.BLUE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ButtonText = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const CartIcon = styled.img`
  padding-right: 3.4px;
`;

export const Counter = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  padding-right: 12px;
`;
