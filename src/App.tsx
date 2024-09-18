import { ArtSearch } from './components/ArtSearch';
import { Gallery } from './components/Gallery';
import { arts_api } from './constants/constants';

function App() {
  return (
    <>
      <ArtSearch />
      <Gallery url={arts_api} />
    </>
  );
}

export default App;
