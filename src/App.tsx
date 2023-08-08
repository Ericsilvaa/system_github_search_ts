import Home from "./pages/home";
import { useAppSelector } from "./redux/store.hooks";
import { darkMode } from "./redux/prefers/slice";

// style
import * as C from "./app.styles";
import { GlobalStyle } from "./config/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = useAppSelector(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <C.Container>
          <C.Area>
            <Home />
          </C.Area>
        </C.Container>
      </>
    </ThemeProvider>
  );
}

export default App;
