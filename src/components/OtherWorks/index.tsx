import { OtherArts } from '@components/OtherArts';
import { Subtitle } from '@components/ui/Subtitle';
import { Title } from '@components/ui/Title';
import { Container } from '@styles/global';
import { Wrapper } from './styled';

export const OtherWorks = () => {
  return (
    <Container>
      <Wrapper>
        <Subtitle text="Here some more" />
        <Title text="Other works for you" />
        <OtherArts />
      </Wrapper>
    </Container>
  );
};
