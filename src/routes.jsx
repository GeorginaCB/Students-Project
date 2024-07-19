import { createBrowserRouter, } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { UserDatails } from "./pages/user-details";
import { Home } from "./pages/home";
import { Users } from "./pages/users";
import { Contact } from "./pages/contact";
export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact/>
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
  {
    path: "/servico-1",
    element: <UserDatails/>
  },
  
  {
    path: "/servico-2",
    element: <UserDatails/>
  },
  
  {
    path: "/servico-3",
    element: <UserDatails/>
  },
  
 

]);
