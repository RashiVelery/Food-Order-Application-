import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './app/store.js'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

import App from "./App.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/About/About.jsx";
import Menu from "./components/menu/Menu.jsx";
import Root from "./components/rootComponent/Root.jsx";
import Cart from "./components/cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import ItemDetails from "./components/menu/ItemDetails.jsx";
import AdminLayout from "./Admin/AdminLayout.jsx";
import AdminDashboard from "./Admin/AdminDashboard.jsx";
import AdminOrders from "./Admin/AdminOrders.jsx";
import AdminProducts from "./Admin/AdminProducts.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/menu", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/menu/:id", element: <ItemDetails /> },

    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,   // new layout, not Root
    children: [
      { index: true, element: <AdminDashboard /> },   // /admin
      { path: "products", element: <AdminProducts /> }, // /admin/products
      { path: "orders", element: <AdminOrders /> },     // /admin/orders
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
