import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
/* COMPONENTS */
import App from "./App";
import Contacts from "./routes/contacts";
import ErrorPage from "./error-page";
import User from "./routes/User";
import Posts from "./routes/posts";
import Post from "./routes/post";
/* STYLE */
import "./index.css";
import Navbar from "./components/navbar/Navbar";

/* const router = createBrowserRouter([
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
]); */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<App />} errorElement={<ErrorPage />} />
      <Route path="/contacts">
        <Route index element={<Contacts />} />
        <Route path=":userId" element={<User />} />
      </Route>
      <Route path="/posts">
        <Route index element={<Posts />} />
        <Route path=":id" element={<Post />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
