import styled from 'styled-components';

export const SubTitleText = styled.h3`
  color: ${({ theme }) => theme.colors.secondAccent};
  font-size: ${({ theme }) => theme.fontSize.default};
  line-height: ${({ theme }) => theme.lineHeight.default};
  display: flex;
  justify-content: center;
  align-items: center;
`;
