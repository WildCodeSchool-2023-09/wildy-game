import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";

import App from "./pages/App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Boutique from "./pages/Boutique";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Jeu from "./pages/Jeu";
import Profil from "./pages/Profil";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "boutique",
        element: <Boutique />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "pacman",
        element: <Jeu />,
      },
      {
        path: "profil",
        element: <Profil />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </UserProvider>
  </React.StrictMode>
);
