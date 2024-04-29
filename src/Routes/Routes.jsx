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
import Error from "../Components/Error";
import ViewCardsDetails from "../Pages/ViewCardsDetails";
import Country_spots from "../Pages/Country_spots";
import Mylist_edit from "../Pages/Mylist_edit";
import PrivateRoute from "../Components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/login",
        element: <Login></Login>
      },

      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: '/alltourist',
        element: <PrivateRoute><AllTouristSpot></AllTouristSpot></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/addtourist')
      },
      {
        path: "/addtourist",
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
      },
      {
        path: "/mylist",
        element: <PrivateRoute><Mylist></Mylist></PrivateRoute>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/viewDetails/:id',
        element: <ViewCardsDetails />,

      },
      {
        path: '/country/:country_name',
        element: <Country_spots></Country_spots>,
        
      },
      {
        path: "/edit-mylist/:id",
        element: <Mylist_edit></Mylist_edit>,
        loader: ({params}) => fetch(`http://localhost:5000/edit-mylist/${params.id}`)
      },
      {
        path: "*",
        element: <PrivateRoute></PrivateRoute>
      }


    ]


  },
]);


export default router;
