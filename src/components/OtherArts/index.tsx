import { Gallery } from '@components/Gallery';
import { ARTS_API } from '@constants/constants';

export const OtherArts = () => {
  return <Gallery url={ARTS_API} />;
};
