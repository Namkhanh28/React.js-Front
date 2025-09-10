import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../components/BT1/ProductDetail";
import Student from "../components/BT2/Student";
import Students from "../components/BT3/Student";
import SearchParams from "../components/BT4/BT4";
import Login from "../components/BT5/Login";
import Account from "../components/BT5/Account";
import Home from "../components/BT5/Home";
import PrivateRouter from "../components/BT5/PrivateRouter";

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