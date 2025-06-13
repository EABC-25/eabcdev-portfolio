import "./App.css";

import { type ContentTypes } from "./components/types/types";
import Window from "./components/reusable/Window";
import Home from "./components/app/Home";
import About from "./components/app/About";
import Works from "./components/app/Works";
import { TbCircleLetterE } from "react-icons/tb";
import { IoPersonOutline, IoFolderOutline } from "react-icons/io5";

const appContent: ContentTypes[] = [
  {
    id: "appHome",
    icon: <TbCircleLetterE />,
    component: <Home />,
  },
  {
    id: "appAbout",
    icon: <IoPersonOutline />,
    component: <About />,
  },
  {
    id: "appWorks",
    icon: <IoFolderOutline />,
    component: <Works />,
  },
];

const App: React.FC = () => {
  return (
    <main>
      <Window content={appContent} panelType={"main"} />
    </main>
  );
};

export default App;
