import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";

import { NotFound } from "./pages/NotFound";
import UserDatails from "./pages/user-details";
import Contact from "./pages/contact";
import Users from "./pages/users";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
   
  },
  {
    path: "/contact",
    element:<Contact/>,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:username",
    element: <UserDatails/>
  },
  {
    path: "*",
    element: <NotFound/>
  },
]);
