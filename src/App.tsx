import Home from 'src/pages/Home';
import GlobalStyle, { styledTheme } from 'src/styles';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={styledTheme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
