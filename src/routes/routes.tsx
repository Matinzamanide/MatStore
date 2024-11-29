// src/routes.ts
import Store from "../pages/store/store";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import PrivateRoute from "../components/private-route/private-route";
import Cart from "../pages/cart/cart";
import Product from "../pages/product/product";

export const routes = [
  {
    path: "/",
    element: <Store />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "cart",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
];

export default routes;
