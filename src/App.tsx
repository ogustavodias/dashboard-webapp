// Styles
import * as S from "./Styles";

// Components
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";

// Routes
import { RouterProvider } from "react-router-dom";
import useRouter from "./Hooks/useRouter";

function App() {
  const routes = useRouter();

  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <Sidenav />
        <main>
          <Header />
          <RouterProvider router={routes} />
        </main>
      </S.Container>
    </>
  );
}

export default App;
