import { TextProps } from 'types/ArtInterfaces';

import { SubTitleText } from './styled';

export const Subtitle = ({ text }: TextProps) => {
  return <SubTitleText>{text}</SubTitleText>;
};
