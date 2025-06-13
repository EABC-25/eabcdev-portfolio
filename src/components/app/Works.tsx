import { type ContentTypes, type WorkTypes } from "../types/types";
import Window from "../reusable/Window";
import Work from "../reusable/Work";
import Y from "../works/Y";
import { GiTank } from "react-icons/gi";
import { TbHexagonLetterY } from "react-icons/tb";

const workContent: WorkTypes[] = [
  {
    id: "work1",
    title: "work1",
  },
  {
    id: "work2",
    title: "work2",
  },
];

const worksContent: ContentTypes[] = [
  {
    id: "compare-wot-app",
    icon: <GiTank />,
    component: <Work work={workContent[0]} />,
  },
  {
    id: "y-app",
    icon: <TbHexagonLetterY />,
    component: <Y />,
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
