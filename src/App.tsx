// Styles
import * as S from "./Styles";

// Components
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";

function App() {
  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <Sidenav />
        <Header />
      </S.Container>
    </>
  );
}

export default App;
