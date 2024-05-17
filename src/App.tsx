// Styles
import * as S from "./Styles";

// Components
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <Sidenav />
      </S.Container>
    </>
  );
}

export default App;
