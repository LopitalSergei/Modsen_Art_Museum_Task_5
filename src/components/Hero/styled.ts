import styled from 'styled-components';

export const HeroTitle = styled.h1`
  max-width: ${({ theme }) => theme.sizes.heroWidth};
  font-size: ${({ theme }) => theme.fontSize.title};
  text-align: center;
  margin: ${({ theme }) => theme.sizes.heroMargins};
  font-weight: bold;

  span {
    color: ${({ theme }) => theme.colors.mainAccent};
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
`;
