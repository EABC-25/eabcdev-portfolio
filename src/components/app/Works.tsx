import { type ContentTypes, type WorkTypes } from "../types/types";
import Window from "../reusable/Window";
import Work from "../reusable/Work";
import { IoHomeOutline } from "react-icons/io5";

const workContent: WorkTypes[] = [
  {
    id: "work1",
    title: "work1",
  },
  {
    id: "work2",
    title: "work2",
  },
  {
    id: "work3",
    title: "work3",
  },
  {
    id: "work4",
    title: "work4",
  },
  {
    id: "work5",
    title: "work5",
  },
];

const worksContent: ContentTypes[] = [
  {
    id: "work1",
    icon: <IoHomeOutline />,
    component: <Work work={workContent[0]} />,
  },
  {
    id: "work2",
    icon: <IoHomeOutline />,
    component: <Work work={workContent[1]} />,
  },
  {
    id: "work3",
    icon: <IoHomeOutline />,
    component: <Work work={workContent[2]} />,
  },
  {
    id: "work4",
    icon: <IoHomeOutline />,
    component: <Work work={workContent[3]} />,
  },
  {
    id: "work5",
    icon: <IoHomeOutline />,
    component: <Work work={workContent[4]} />,
  },
  {
    id: "work6",
    icon: <IoHomeOutline />,
    component: <Work work={workContent[4]} />,
  },
  {
    id: "work7",
    icon: <IoHomeOutline />,
    component: <Work work={workContent[4]} />,
  },
  {
    id: "work8",
    icon: <IoHomeOutline />,
    component: <Work work={workContent[4]} />,
  },
  {
    id: "work9",
    icon: <IoHomeOutline />,
    component: <Work work={workContent[4]} />,
  },
  // {
  //   id: "work10",
  //   tabName: "work10",
  //   component: <Work work={workContent[4]} />,
  // },
  // {
  //   id: "work11",
  //   tabName: "work11",
  //   component: <Work work={workContent[4]} />,
  // },
  // {
  //   id: "work12",
  //   tabName: "work12",
  //   component: <Work work={workContent[4]} />,
  // },
  // {
  //   id: "work13",
  //   tabName: "work13",
  //   component: <Work work={workContent[4]} />,
  // },
  // {
  //   id: "work14",
  //   tabName: "work14",
  //   component: <Work work={workContent[4]} />,
  // },
  // {
  //   id: "work15",
  //   tabName: "work15",
  //   component: <Work work={workContent[4]} />,
  // },
  // {
  //   id: "work16",
  //   tabName: "work16",
  //   component: <Work work={workContent[4]} />,
  // },
  // {
  //   id: "work17",
  //   tabName: "work17",
  //   component: <Work work={workContent[4]} />,
  // },
];

const Works: React.FC = () => {
  return (
    <div className="content-div">
      <Window content={worksContent} panelType={"sub"} />
    </div>
  );
};

export default Works;
