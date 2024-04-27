import {
    createBrowserRouter,
   
  } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import Contact from "../Pages/Contact";
import AllTouristSpot from "../Pages/AllTouristSpot";
import AddTouristSpot from "../Pages/AddTouristSpot";
import Mylist from "../Pages/Mylist";
import Register from "../Pages/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },

        {
            path:"/login",
            element:<Login></Login>
        },

        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
          path:'/alltourist',
          element:<AllTouristSpot></AllTouristSpot>,
          loader: ()=> fetch('http://localhost:5000/addtourist')
        },
        {
          path:"/addtourist",
          element:<AddTouristSpot></AddTouristSpot>
        },
        {
          path:"/mylist",
          element:<Mylist></Mylist>
        },
        {
          path:"/register",
          element:<Register></Register>
        }

      ]


    },
  ]);
   
   
   export default router;
   