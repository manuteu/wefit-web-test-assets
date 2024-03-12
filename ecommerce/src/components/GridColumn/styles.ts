import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: auto !important;
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
