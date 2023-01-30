import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Contacts from "./routes/contacts";
import ErrorPage from "./error-page";
import User from "./routes/User";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/contacts",
    element: <Contacts />,
  },

  {
    path: "/contacts/:userId",
    element: <User />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
