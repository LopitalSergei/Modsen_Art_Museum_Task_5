import { Gallery } from '@components/Gallery';
import { arts_api } from '@constants/constants';

export const OtherArts = () => {
  return <Gallery url={arts_api} />;
};
