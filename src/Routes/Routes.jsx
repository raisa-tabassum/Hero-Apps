import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps";
import AppDetails from "../Pages/AppDetails";
import InstalledApps from "../Pages/InstalledApps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        // path: "/home",
        Component: Home,
        loader: () => fetch("/productiveAppsData.json"),
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
        loader: () => fetch("/productiveAppsData.json"),
      },
      {
        path: "/app/:id",
        element: <AppDetails></AppDetails>,
        loader: async ({ params }) => {
          const res = await fetch("/productiveAppsData.json");
          const data = await res.json();
          return data.find((app) => app.id === parseInt(params.id));
        },
      },
      {
        path: "/installation",
        element: <InstalledApps></InstalledApps>,
      },
    ],
  },
]);
export default router;
