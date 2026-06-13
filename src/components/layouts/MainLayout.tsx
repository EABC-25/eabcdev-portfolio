import { Outlet } from "react-router";
import { TbCircleLetterE } from "react-icons/tb";
import { IoFolderOutline } from "react-icons/io5";

import { type ContentTypes } from "../types/types";
import { useMainGlobalContext } from "../../context/GlobalContext";
import Panel from "../reusable/Panel";
import Overlay from "../app/Overlay";

const appContent: ContentTypes[] = [
  {
    id: "",
    icon: <TbCircleLetterE />,
  },
  {
    id: "projects",
    icon: <IoFolderOutline />,
  },
];

const MainLayout: React.FC = () => {
  const { state } = useMainGlobalContext();
  const originRoute = "/";
  return (
    <>
      {state.isOverlayOpen && <Overlay />}
      <main>
        <div className="main-layout">
          <div className="content">
            <Outlet />
            <Panel
              content={appContent}
              originRoute={originRoute}
              panelType={"main"}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
