import { TextProps } from 'types/ArtInterfaces';
import { TitleText } from './styled';

export const Title = ({ text }: TextProps) => {
  return <TitleText>{text}</TitleText>;
};
