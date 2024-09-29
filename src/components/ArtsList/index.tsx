import { FC, memo } from 'react';

import { ArtCard } from '@components/ArtCard';
import { Loader } from '@components/ui/Loader';
import { ArtsListI } from 'types/artInterfaces';

import { ArtRow } from './styled';

export const ArtsList: FC<ArtsListI> = memo(({ arts }) => {
  if (!arts?.length) {
    return <Loader />;
  }
  return (
    <ArtRow>
      {arts.map((props) => (
        <ArtCard key={props.id} {...props} />
      ))}
    </ArtRow>
  );
});
