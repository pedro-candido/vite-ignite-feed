import { ThemeProvider } from "styled-components";

import "./translate/i18n";

import GlobalStyle from "./global/css";
import theme from "./global/theme";

import { Header, Post } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
