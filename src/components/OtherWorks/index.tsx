import { FC } from 'react';

import { Container } from '@styles/global';
import { Title } from '@components/ui/Title';
import { Subtitle } from '@components/ui/Subtitle';

import { Wrapper } from './styled';
import { ARTS_API } from '@constants/constants';
import { Gallery } from '@components/Gallery';

export const OtherWorks: FC = () => {
  return (
    <Container>
      <Wrapper>
        <Subtitle text="Here some more" />
        <Title text="Other works for you" />
        <Gallery url={ARTS_API} />;
      </Wrapper>
    </Container>
  );
};
