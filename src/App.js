import { ColorModeContext, useMode} from './theme';
// CssBaseline-reset css to default, themeprovide-provide ability to pass themes into mui
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  //access to theme and colorMode
  const [theme, colorMode] = useMode();

  return (
    //set up colorContext to access everywhere
    //ThemeProvider-gives mui access
    //CssBaseline-reset to css default
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content"></main>
        </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
