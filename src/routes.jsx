import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DashboardPage from "./Components/statistics";
import Dashboard from "./pages/Dashboard/dashboardLayout";
import ForgetPass from "./pages/forgetPass";
import LoginPage from "./pages/login";
import Register from "./pages/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget",
        element: <ForgetPass />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboardPage",
        element: <DashboardPage />,
      },
    ],
  },
]);
