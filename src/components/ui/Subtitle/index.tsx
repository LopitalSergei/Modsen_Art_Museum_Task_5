import { FC } from 'react';

import { TextProps } from 'types/artInterfaces';

import { SubTitleText } from './styled';

export const Subtitle: FC<TextProps> = ({ text }) => {
  return <SubTitleText>{text}</SubTitleText>;
};
