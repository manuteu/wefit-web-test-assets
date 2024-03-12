import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Purchased from './pages/Purchased';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/purchased',
        element: <Purchased />
      },
    ]
  },
])

export default function Routes() {
  return (
    <RouterProvider router={router} />
  )
}
