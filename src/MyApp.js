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

    React.useEffect(() => {
        const localStorageRef = localStorage.getItem('Theme');
        setMode(JSON.parse(localStorageRef))    
    }, []);

    React.useEffect(() => {
        localStorage.setItem('Theme', JSON.stringify(mode))
    }, [mode]);

 
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
            buttonEnd: '#D82148',
            buttonHover: '#444445',
            backgroundHover: '#444445',
            blockCode:'repeating-linear-gradient(to bottom, transparent, transparent 10px, #323232 10px, #323232 11px),repeating-linear-gradient(to right, transparent, transparent 10px, #323232 10px, #323232 11px)',
          
        },
          boxShadow: '0px 0px 2px wheat',
          boxShadowSearch: '0px -7px 15px -9px wheat',
          borderBottom: '1px dashed #D82148', 
          borderLeft: '2px solid #323232',
          borderRight: '1px dashed #cdcdcd',	

        }),
        ...(mode === 'light' && {
          background: {
            // header: '#247881',
            header: '#485460',
            default: '#FFD124',
            paper: '#DFDFDE',
            button: '#D82148',
            buttonEnd: '#3d3d3d',
            buttonHover: '#ff0036',
            backgroundHover: '#b2b2b2',
            blockCode:'repeating-linear-gradient(to bottom, transparent, transparent 10px, #cccccc 10px, #cccccc 11px),repeating-linear-gradient(to right, transparent, transparent 10px, #cccccc 10px, #cccccc 11px)',  
        },
          boxShadow: '0px 0px 2px #485460',
          boxShadowSearch: '0px -7px 10px -9px #FD5D5D',
          borderBottom: '1px dashed #2B2B2B', 
          borderLeft: '2px solid #cccccc',
          borderRight: '1px dashed #ff9f80',	
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
            auxiliary: 'black',
            school: '#535353',
            ol: '#282828',
            tegMain: '#804000',
            tegSupport: '#ad300e',
          }),
          ...(mode==='dark'&&{
            primary: 'white',
            secondary: 'black',
            paper: '#ffffff',
            hover: 'white',
            auxiliary: '#C69B7B',
            search: 'wheat',
            school: '#cccccc',
            ol: '#da9f65',
            tegMain: '#14b4b4',
            tegSupport: '#FFD93D',

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
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
  </ColorModeContext.Provider>
);
}