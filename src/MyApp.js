import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import { createStyles, makeStyles } from '@mui/styles';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
export const MyContext = React.createContext()


export default function MyApp() {
    const [mode, setMode] = React.useState('light');
    const [clock, setClock] = React.useState('true')


  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

 const value = {
    clock: clock,
    setClock:setClock
 }

const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          	...(mode==='dark'&&{
          background:{
            header: '#1F1F1F',
            default: '#0a0a0a',
            paper: '#1f1f1f',
            button: '#3d3d3d',
            buttonHover: '#444445'

          },
          boxShadow: '0px 0px 2px wheat',
          boxShadowSearch: '0px -7px 15px -9px wheat',
          borderBottom: '1px solid #2B2B2B',  	
        }),
        ...(mode === 'light' && {
          background: {
            header: '#247881',
            default: '#FFD124',
            paper: '#DFDFDE',
            button: '#D82148',
            buttonHover: '#ff0036'
          },
          boxShadow: '0px 0px 2px #ff0036',
          boxShadowSearch: '0px -7px 10px -9px #FD5D5D',
          borderBottom: '1px solid #2B2B2B',  	
        }),
        // ...(mode === 'color' && {
        //   background: {
        //     header: '#FFD93D',
        //     default: '#FFD124',
        //     paper: '#05595B',
        //     button: '#D82148'
        //   },
        //   boxShadow: '0px 0px 2px #F5F5F5',
        //   borderBottom: '1px solid #2B2B2B',  	
        // }),

        text:{
          ...(mode === 'light' && {
            primary: 'black',
            secondary: 'white',
            paper: '#ffffff',
            hover: 'white',
            auxiliary: '#C69B7B',
            search: '',
          }),
          ...(mode==='dark'&&{
            primary: 'white',
            secondary: 'black',
            paper: '#ffffff',
            hover: 'white',
            auxiliary: 'red',
            search: 'wheat',
          }),
          // ...(mode==='color'&&{
          //   primary: 'white',
          //   secondary: 'black',
          //   paper: '#ffffff',
          //   hover: 'white',
          //   auxiliary: 'red'
          // }),
        },
			
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
          color: 'white',
      }),
      ...(mode==='light'&&{
        background:'#F5F5F5',
        color: 'black',
      }),
      // ...(mode==='cplor'&&{
      //   background:'#062C30',
      // }),  
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
    <MyContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </MyContext.Provider>
  </ColorModeContext.Provider>
);
}