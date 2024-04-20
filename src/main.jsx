import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/Profile.jsx";
import Search from "./components/Search.jsx";
import "./index.css";
import "./styles/responsive.css";
import BookDetail from "./components/views/book/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/books/:id",
    element: <BookDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
