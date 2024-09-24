import { Container } from '@styles/global';
import { Title } from '@components/ui/Title';
import { OtherArts } from '@components/OtherArts';
import { Subtitle } from '@components/ui/Subtitle';

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
