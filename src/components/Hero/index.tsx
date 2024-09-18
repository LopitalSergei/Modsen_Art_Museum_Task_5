import { FC } from 'react';
import { HeroContainer, HeroTitle } from './styled';

export const Hero: FC = () => {
  return (
    <HeroContainer>
      <HeroTitle>
        Let’s Find Some <span>Art</span> Here!
      </HeroTitle>
    </HeroContainer>
  );
};
