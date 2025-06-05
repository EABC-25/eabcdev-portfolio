import { type ContentTypes } from "../types/types";
import Panel from "./Panel";

interface Props {
  content: ContentTypes[];
  panelType: "main" | "sub";
}

const Window: React.FC<Props> = ({ content, panelType }) => {
  return (
    <div className="window">
      <Panel content={content} panelType={panelType} />
    </div>
  );
};

export default Window;
