import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Shared/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
// import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },

      //Admin Routes
      //Make Sure that It is under Admin route

      {
        path: "adminHome",
        element: (
          // <AdminRoute>
          <AdminHome></AdminHome>
          // </AdminRoute>
        ),
      },
      {
        path: "additems",
        element: (
          // <AdminRoute>
          <AddItems></AddItems>
          // </AdminRoute>
        ),
      },
      {
        path: "updateitem/:id",
        element: (
          // <AdminRoute>
          <UpdateItem></UpdateItem>
        ),
        // </AdminRoute>
        loader: ({ params }) =>
          fetch(`http://localhost:5008/menu/${params._id}`),
      },
      {
        path: "manageitem",
        element: (
          // <AdminRoute>
          <ManageItems></ManageItems>
          // </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          // <AdminRoute>
          <AllUsers></AllUsers>
          // </AdminRoute>
        ),
      },
    ],
  },
]);
