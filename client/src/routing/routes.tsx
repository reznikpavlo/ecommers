import Layout from "../components/Layout";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import { createBrowserRouter } from "react-router-dom";
import PATH from "./pathConstants";

const router = createBrowserRouter([
  {
    path: PATH.index,
    element: <Layout />,
    errorElement: <h1>Page Not Found</h1>,
    children: [
      {
        path: PATH.index,
        index: true,
        element: <Home />,
      },
      {
        path: PATH.login,
        element: <Login />,
      },
      {
        path: PATH.register,
        element: <Register />,
      },
    ],
  },
]);

export default router;