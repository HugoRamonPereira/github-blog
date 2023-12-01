import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import globalTheme from './styles/theme/globalTheme';
import { GlobalStyles } from './styles/globalStyle';

export function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}
