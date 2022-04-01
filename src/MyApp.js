import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function MyApp() {
  const [mode, setMode] = React.useState('light');

// React.useEffect(() => {
//     setMode(JSON.parse(window.localStorage.getItem('mode')));
//   }, []);

//   React.useEffect(() => {
//     window.localStorage.setItem('mode', mode);
//   }, [mode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

 
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}