import { FC } from 'react';

import { TextProps } from 'types/artInterfaces';

import { TitleText } from './styled';

export const Title: FC<TextProps> = ({ text }) => {
  return <TitleText>{text}</TitleText>;
};
