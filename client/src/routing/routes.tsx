import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import SignIn from "../components/auth/SignIn";
import Product from "../components/products/ProductDetails";
import Cart from "../components/cart/Cart";
import NewCustomer from "../components/auth/NewCustomer";
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
      {
        path: PATH.cart,
        element: <Cart/>,
      },
      {
        path: PATH.newCustomer,
        element: <NewCustomer/>,
      },
    ],
  },
]);

export default router;