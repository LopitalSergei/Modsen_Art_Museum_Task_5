import styled from 'styled-components';

export const TitleText = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.subTitle};
  line-height: ${({ theme }) => theme.lineHeight.subTitle};
  display: flex;
  justify-content: center;
  align-items: center;
`;
