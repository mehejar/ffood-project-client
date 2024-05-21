import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Dashboard from "../Layout/Main/Dashboard";
import AddItem from "../Layout/Main/Dashboard Pages/AddItem";
import Cart from "../Pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Layout/Main/Dashboard Pages/AllUsers";

  export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <Home></Home>
          },
          {
            path: "/shop",
            element: <Shop></Shop>
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/signup',
            element: <SignUp></SignUp>
          },
          {
            path: '/cart',
            element: <PrivateRoute><Cart></Cart></PrivateRoute>
          }
          
        ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        // admin routes
        {
          path: 'additem',
          element: <AddItem></AddItem>
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        }



        
      ]

    }
  ])