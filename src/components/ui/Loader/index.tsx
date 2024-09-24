import { FC } from 'react';
import { LoaderBlock, LoaderSpan } from './styled';

export const Loader: FC = () => {
  return (
    <LoaderBlock>
      <LoaderSpan />
    </LoaderBlock>
  );
};
