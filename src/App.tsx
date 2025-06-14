import "./App.css";

import { type ContentTypes } from "./components/types/types";
import { useMainGlobalContext } from "./context/GlobalContext";
import Window from "./components/reusable/Window";
import Home from "./components/app/Home";
import About from "./components/app/About";
import Works from "./components/app/Works";
import Overlay from "./components/app/Overlay";
import Sidebar from "./components/app/Sidebar";
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
  const { state } = useMainGlobalContext();

  return (
    <>
      {state.isOverlayOpen && <Overlay />}
      <Sidebar />
      <main>
        <Window content={appContent} panelType={"main"} />
      </main>
    </>
  );
};

export default App;
