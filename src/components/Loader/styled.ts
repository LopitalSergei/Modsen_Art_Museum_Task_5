import styled from 'styled-components';

export const LoaderBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.sizes.margin4x};
`;

export const LoaderSpan = styled.span`
  width: ${({ theme }) => theme.sizes.iconSize};
  height: ${({ theme }) => theme.sizes.iconSize};
  border: 5px solid ${({ theme }) => theme.colors.favoriteMark};
  border-bottom-color: ${({ theme }) => theme.colors.mainAccent};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
