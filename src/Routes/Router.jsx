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
import AdminRoute from "./AdminRoute";
import ManagePorducts from "../Layout/Main/Dashboard Pages/ManageProducts";
import UpdateProduct from "../Layout/Main/Dashboard Pages/UpdateProduct";
import CheckOutForm from "../Pages/Cart/CheckoutForm";
import ManageOrders from "../Layout/Main/Dashboard Pages/ManageOrders";
import Contact from "../Pages/Contact/Contact";
import PendingsOrder from "../Layout/Main/Dashboard Pages/PendingOrders";
import ProductDetails from "../Shared/ProductDetails";
import UserDashboard from "../Pages/UserDashboard/UserDashboard";
import AboutUs from "../Pages/AboutUs";

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
          },
          {
            path: '/checkout',
            element: <PrivateRoute><CheckOutForm></CheckOutForm></PrivateRoute>
          },
          {
            path: '/contact',
            element: <Contact></Contact>
          },
          {
            path: '/shop/category',
            element: <Shop></Shop>
          },
          {
            path: 'product/:id',
            element: <ProductDetails></ProductDetails>,
            loader: ({params}) => fetch(`https://freshfood-server.vercel.app/products/${params.id}`)
          },
          {
            path: 'shop/product/:id',
            element: <ProductDetails></ProductDetails>,
            loader: ({params}) => fetch(`https://freshfood-server.vercel.app/products/${params.id}`)
          },
          {
            path: 'aboutus',
            element: <AboutUs></AboutUs>
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
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: 'myOrders',
          element: <UserDashboard></UserDashboard>
        },
        {
          path: 'allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'manageItem',
          element: <AdminRoute><ManagePorducts></ManagePorducts></AdminRoute>
        },
        {
          path: 'updateproduct/:id',
          element: <AdminRoute><UpdateProduct></UpdateProduct></AdminRoute>,
          loader: ({params}) => fetch(`https://freshfood-server.vercel.app/products/${params.id}`)
        },
        {
          path: 'manageorders',
          element: <AdminRoute><ManageOrders></ManageOrders></AdminRoute>,
          children:[
            
            {
              path: 'pendings',
              element: <PendingsOrder></PendingsOrder>
            },
          ]
        }




      ]

    }
  ])