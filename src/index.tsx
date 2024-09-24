import { ThemeProvider } from 'styled-components';

import { theme } from '@styles/theme.ts';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from '@styles/global.ts';
import { Routing } from '@components/Routing/index.tsx';
import { ErrorBoundary } from '@components/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
    <GlobalStyle />
    {/*  <App /> */}
  </ErrorBoundary>
);
