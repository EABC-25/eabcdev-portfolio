import { type ContentTypes } from "../types/types";
import Window from "../reusable/Window";
import Y from "../works/Y";
import CompareWot from "../works/CompareWot";
import SqlTools from "../works/SqlTools";
import OngoingWork from "../works/OngoingWork";
import { GiTank } from "react-icons/gi";
import { TbHexagonLetterY, TbDots, TbSql } from "react-icons/tb";

const worksContent: ContentTypes[] = [
  {
    id: "compare-wot-app",
    icon: <GiTank />,
    component: <CompareWot />,
  },
  {
    id: "y-app",
    icon: <TbHexagonLetterY />,
    component: <Y />,
  },
  {
    id: "sqltools",
    icon: <TbSql />,
    component: <SqlTools />,
  },
  {
    id: "ongoing works..",
    icon: <TbDots />,
    component: <OngoingWork />,
  },
];

const Works: React.FC = () => {
  return (
    <div className="content-div">
      <Window content={worksContent} panelType={"sub"} />
    </div>
  );
};

export default Works;
