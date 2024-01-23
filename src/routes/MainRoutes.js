// project import
import MainLayout from "../layout/MainLayout";
import { Navigate } from "react-router-dom";

// pages routing
import Dashboard from "../pages/Dashboard";
import Flows from "../pages/Flows";
import Analytics from "../pages/Analytics";
import Support from "../pages/Support";
import Account from "../pages/Account";

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Navigate to="/dashboard" />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/flows",
      element: <Flows />
    },
    {
      path: "/analytics",
      element: <Analytics />
    },
    {
      path: "/support",
      element: <Support />
    },
    {
      path: "/account",
      element: <Account />
    },
  ],
};

export default MainRoutes;
