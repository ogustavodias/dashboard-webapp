// Styles
import * as S from "./Styles";

// Components
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import Sales from "./pages/Sales";

function App() {
  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <Sidenav />
        <main>
          <Header />
          <Sales />
        </main>
      </S.Container>
    </>
  );
}

export default App;
