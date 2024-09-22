import { ArtSearch } from './components/ArtSearch';
import { Gallery } from './components/Gallery';
import { ARTS_API } from './constants/constants';

function App() {
  return (
    <>
      <ArtSearch />
      <Gallery url={ARTS_API} />
    </>
  );
}

export default App;
