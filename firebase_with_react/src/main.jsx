import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./componants/Main";
import "./index.css";
import Home from "./componants/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./componants/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
