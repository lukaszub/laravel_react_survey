import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Surveys from "./views/Surveys";
import Signup from "./views/Signup";
import Login from "./views/Login";
import GuestLayout from "./components/GuestLayout";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Dashboard/>
  },
  {
    path:'/surveys',
    element: <Surveys/>
  },
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      }
    ]
  }
])

export default router;