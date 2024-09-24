import { Gallery } from './components/Gallery';
import { ARTS_API } from './constants/constants';
import { ArtSearch } from './components/ArtSearch';

function App() {
  return (
    <>
      <ArtSearch />
      <Gallery url={ARTS_API} />
    </>
  );
}

export default App;
