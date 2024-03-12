import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './theme';
import Header from './components/Header';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
