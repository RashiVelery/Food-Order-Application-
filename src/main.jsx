import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Root from './components/Root.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Contact from './components/Contact.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [{
        path: "/",
        element: <Home/>
    },
    {
        path: "/menu",
        element: <Menu/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/checkout",
        element: <Checkout/>
    },
  ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
