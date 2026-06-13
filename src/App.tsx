import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/app/Home";
import Projects from "./components/app/Projects";
import CompareWot from "./components/works/CompareWot";
import Y from "./components/works/Y";

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
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
