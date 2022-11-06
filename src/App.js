import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Main from "./layouts/Main";
import Shop from "./Components/Shop/Shop";
import Orders from "./Components/Orders/Orders";
import Inventory from "./Components/Inventory/Inventory";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Shipping from "./Components/Shipping/Shipping";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("http://localhost:5000/products"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: (
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          ),
        },
        {
          path: "/shipping",
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
