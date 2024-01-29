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
import Admin from "./pages/Admin";
import Upload from "./pages/Upload";
import Tetris from "./pages/Tetris";
import Snake from "./pages/Snake";
import ProfilVisiteur from "./components/ProfilVisiteur";

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
        path: "snake",
        element: <Snake />,
      },
      {
        path: "tetris",
        element: <Tetris />,
      },
      {
        path: "profil-settings",
        element: <Profil />,
      },
      {
        path: "profil/:pseudo",
        element: <ProfilVisiteur />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "upload",
        element: <Upload />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserProvider>
    <RouterProvider router={router} />
    <ToastContainer className="toast-position" />
  </UserProvider>
);
