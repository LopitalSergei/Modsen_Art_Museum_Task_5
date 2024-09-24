import { Outlet } from 'react-router-dom';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import { Content } from './styled';

export default function App() {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  );
}
