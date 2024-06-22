// Styles
import * as S from "./Styles";

// Components
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";

// Routes
import { RouterProvider } from "react-router-dom";
import useRouter from "./hooks/useRouter.tsx";

// Global Context provider
import { GlobalContextProvider } from "./context/global";

function App() {
  const routes = useRouter();

  return (
    <GlobalContextProvider>
      <S.GlobalStyle />
      <S.Container>
        <Sidenav />
        <main>
          <Header />
          <RouterProvider router={routes} />
        </main>
      </S.Container>
    </GlobalContextProvider>
  );
}

export default App;
