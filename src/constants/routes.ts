// import App from "@components/App";
// import Artwork from "@pages/Artwork";
// import Favorites from "@pages/Favorites";
// import Home from "@pages/Home";
// import NotFound from "@pages/NotFound";
import home from '@assets/icons/home.svg';
import bookmark from '@assets/icons/bookmarkIcon.svg';

// export const routes = [
//   {
//     path: "/",
//     element: App,
//   },
//   {
//     path: "/home",
//     element: Home,
//   },
//   {
//     path: "/favorites",
//     element: Favorites,
//   },
//   {
//     path: "/artwork",
//     element: Artwork,
//   },
//   {
//     path: "*",
//     element: NotFound,
//   },
// ];

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
