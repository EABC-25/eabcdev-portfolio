import { type JSX } from "react";
import { Outlet } from "react-router";
import { TbCircleLetterE } from "react-icons/tb";
import { IoFolderOutline } from "react-icons/io5";

import Panel from "../reusable/Panel";

type ContentTypes = {
  id: string;
  tabName?: string;
  icon: JSX.Element;
};

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
  const originRoute = "/";
  return (
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
  );
};

export default MainLayout;
