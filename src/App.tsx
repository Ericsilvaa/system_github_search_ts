import Home from "./pages/home";
// style
import { GlobalStyle } from "./config/styles/GlobalStyle";
import * as C from "./app.styles";
import { useAppSelector } from "./redux/store.hooks";
import { darkMode } from "./redux/prefers/slice";

function App() {
  const {dark} = useAppSelector(darkMode)


  return (
    <>
      <GlobalStyle />
      <C.Container dark={dark}>
        <C.Area>
          <Home />
        </C.Area>
      </C.Container>
    </>
  );
}

export default App;
