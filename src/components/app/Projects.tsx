import { type JSX, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { GiTank } from "react-icons/gi";
import { TbHexagonLetterY, TbDots, TbSql } from "react-icons/tb";

import Panel from "../reusable/Panel";

type ContentTypes = {
  id: string;
  tabName?: string;
  icon: JSX.Element;
};

const worksContent: ContentTypes[] = [
  {
    id: "compare-wot-app",
    icon: <GiTank />,
  },
  {
    id: "y-app",
    icon: <TbHexagonLetterY />,
  },
  {
    id: "sqltools",
    icon: <TbSql />,
  },
  {
    id: "ongoing works..",
    icon: <TbDots />,
  },
];

const Projects: React.FC = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/projects/compare-wot-app");
  // }, []);

  const originRoute = "/projects/";
  return (
    <div className="content-div">
      <div className="content">
        <Outlet />

        <Panel
          content={worksContent}
          originRoute={originRoute}
          panelType={"sub"}
        />
      </div>
    </div>
  );
};

export default Projects;
