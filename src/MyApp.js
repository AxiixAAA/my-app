import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import { createStyles, makeStyles } from '@mui/styles';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function MyApp() {
  const [mode, setMode] = React.useState('light');

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
          	...(mode==='dark'&&{
				background:{
				default: '#0a0a0a',
				paper: '#1f1f1f',
				},
          	}),
			text:{
				...(mode === 'light'
				? {
				  primary: '#0a0a0a',
				  secondary: '#0a0a0a',
				}
				: {
				  primary: '#dfe4ea',
				  paper: '#ffffff',
				}),
			},
			...(mode === 'light' && {
				background: {
					default: '#dfe4ea',
					paper: '#ffffff'
				}
			})
        }
    }),
    [mode],
  );


//  Темизация body
const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      
      body: {
        ...(mode==='dark'&&{
          background:'#0a0a0a',
      }),
        ...(mode==='light'&&{
        background:'#ffffff',
      })
     
      }
    }
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </ColorModeContext.Provider>
);
}