import Home from '@pages/Home';
import App from '@components/App';
import Artwork from '@pages/Artwork';
import NotFound from '@pages/NotFound';
import Favorites from '@pages/Favorites';
import home from '@assets/icons/home.svg';
import bookmark from '@assets/icons/bookmarkIcon.svg';

export const routes = {
  app: {
    path: '/',
    element: App,
  },
  home: {
    path: '/home',
    element: Home,
  },
  favorites: {
    path: '/favorites',
    element: Favorites,
  },
  artWork: {
    path: '/artwork/:id',
    element: Artwork,
  },
  notFound: {
    path: '*',
    element: NotFound,
  },
};

export const navLinks = [
  {
    page: 'Home',
    href: '/',
    icon: home,
  },
  {
    page: 'Favorites',
    href: '/favorites',
    icon: bookmark,
  },
];
