import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/app/Home";
import Projects from "./components/app/Projects";
import CompareWot from "./components/projects/CompareWot";
import Y from "./components/projects/Y";
import InProgress from "./components/projects/InProgress";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>ERROR</div>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "projects",
        element: <Projects />,
        children: [
          { path: "compare-wot-app", element: <CompareWot /> },
          { path: "y-app", element: <Y /> },
          { path: "in-progress", element: <InProgress /> },
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
