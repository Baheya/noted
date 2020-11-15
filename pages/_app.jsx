import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Nav from '../components/Nav';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
