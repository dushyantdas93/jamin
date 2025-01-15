import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./pages/components/Footer.jsx";
import Home from "./pages/HOME/Home.jsx";
import NotFound from "./pages/components/NotFound.jsx";
import Ads from "./pages/ADS/Ads.jsx";
import "./App.css";
import ViewDetails from "./pages/ADS/ViewDetails.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import ProtectedRoute from "./Routes/ProtectedRoute.jsx";
import PublicRoute from "./Routes/PublicRoute.jsx";
import { Slide } from "react-toastify";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    ,
    {
      path: "/ads",
      element: <Ads />,
    },
    {
      path: "/view-detail",
      element: <ViewDetails />,
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
<<<<<<< HEAD
       
=======
>>>>>>> 06b429b2550b9500f6d821e46df7d3e3be915391
        {
          path: "/ads",
          element: <Ads />,
        },
        {
          path: "/view-detail",
          element: <ViewDetails />,
        },
      ],
    },
    {
      path: "/",
      element: <PublicRoute />, // Public routes wrapper
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />

      {/* <Footer /> */}
    </div>
  );
};

export default App;
