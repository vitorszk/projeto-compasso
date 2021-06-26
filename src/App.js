import React from 'react'
import theme from './constants/themes';
import Router from './routes/router';
import { ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
