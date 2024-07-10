import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import SignIn from "../components/auth/SignIn";
import Product from "../components/products/Product";
import { createBrowserRouter } from "react-router-dom";
import PATH from "./pathConstants";

const router = createBrowserRouter([
  {
    path: PATH.index,
    element: <Layout />,
    errorElement: <h1>Error Occured</h1>,
    children: [
      {
        path: PATH.index,
        index: true,
        element: <Home />,
      },
      {
        path: PATH.signIn,
        element: <SignIn/>,
      },
      {
        path: PATH.product,
        element: <Product/>,
      },
    ],
  },
]);

export default router;