import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard/dashboardLayout";

//Pages
import ForgetPass from "./pages/forgetPass";
import LoginPage from "./pages/login";
import Register from "./pages/register";

//Complaints status
import Abusive from "./pages/Dashboard/Complaints/Abusive";
import NotApplicable from "./pages/Dashboard/Complaints/NotApplicable";
import Ongoing from "./pages/Dashboard/Complaints/Ongoing";
import Pending from "./pages/Dashboard/Complaints/Pending";
import Solved from "./pages/Dashboard/Complaints/Solved";
import NotFoundPage from "./results/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/pending",
        element: <Pending />,
      },
      {
        path: "/dashboard/solved",
        element: <Solved />,
      },
      {
        path: "/dashboard/ongoing",
        element: <Ongoing />,
      },
      {
        path: "/dashboard/abusive",
        element: <Abusive />,
      },
      {
        path: "/dashboard/not-applicable",
        element: <NotApplicable />,
      },
    ],
  },
]);
