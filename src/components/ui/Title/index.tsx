import { TextProps } from 'types/artInterfaces';
import { TitleText } from './styled';

export const Title = ({ text }: TextProps) => {
  return <TitleText>{text}</TitleText>;
};
