// React Router DOM
import { createBrowserRouter } from "react-router-dom";
import Resume from "../pages/Resume";
import Sales from "../pages/Sales";
import Sale from "../pages/Sales/Sale";

const useRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Resume />,
    },
    {
      path: "/vendas",
      element: <Sales />,
    },
    {
      path: "/vendas/:id",
      element: <Sale />,
    },
  ]);

  return routes;
};

export default useRouter;
