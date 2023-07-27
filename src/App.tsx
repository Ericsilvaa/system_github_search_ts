import Home from "./pages/home";
// style
import { GlobalStyle } from "./config/styles/GlobalStyle";
import * as C from "./app.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <C.Container>
        <C.Area>
          <Home />
        </C.Area>
      </C.Container>
    </>
  );
}

export default App;
