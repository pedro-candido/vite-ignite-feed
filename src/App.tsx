import { ThemeProvider } from "styled-components";

import "./translate/i18n";

import GlobalStyle from "./global/css";
import theme from "./global/theme";

import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <></>
      </ThemeProvider>
    </div>
  );
}

export default App;
