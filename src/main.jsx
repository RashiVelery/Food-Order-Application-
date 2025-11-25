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
import About from "./components/About.jsx";
import Menu from "./components/menu/Menu.jsx";
import Root from "./components/rootComponent/Root.jsx";
import Cart from "./components/cart/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Contact from "./Contact.jsx";
import ItemDetails from "./components/menu/ItemDetails.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/menu", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
      {path:"/items",element:<ItemDetails/>},
      { path: "/checkout", element: <Checkout /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store ={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
