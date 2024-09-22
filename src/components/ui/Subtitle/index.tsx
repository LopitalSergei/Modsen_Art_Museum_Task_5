import { TextProps } from 'types/artInterfaces';
import { SubTitleText } from './styled';

export const Subtitle = ({ text }: TextProps) => {
  return <SubTitleText>{text}</SubTitleText>;
};
