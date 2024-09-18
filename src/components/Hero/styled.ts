import styled from 'styled-components';

export const HeroTitle = styled.h1`
  max-width: 700px;
  font-size: ${({ theme }) => theme.fontSize.title};
  text-align: center;
  margin: 120px 0 72px;
  font-weight: bold;

  span {
    color: ${({ theme }) => theme.colors.mainAccent};
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
`;
