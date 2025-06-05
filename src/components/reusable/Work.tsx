import { type WorkTypes } from "../types/types";

interface Props {
  work: WorkTypes;
}

const Work: React.FC<Props> = ({ work }) => {
  return <div>{work.title}</div>;
};

export default Work;
