import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 62px;
  height: 62px;
  border: 4px solid ${({ theme }) => theme.COLORS.GRAY_BLUE};
  border-radius: 50%;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_100};
  animation: spin 1s ease infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
