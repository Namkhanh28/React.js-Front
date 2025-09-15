import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "";
import Student from "";
import Students from "";
import SearchParams from "";
import Login from "";
import Account from "";
import Home from "";
import PrivateRouter from "";

const router = createBrowserRouter([
    {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/student/:gender",
    element: <Student />,
  },
  {
    path: "/student",
    element: <Students />,
  },
  {
    path: "/student",
    element: <SearchParams />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account",
    element: <PrivateRouter element={<Account />} />,
  },
  {
    path: "/",
    element: <PrivateRouter element={<Home />} />,
  }
]);

export default router;