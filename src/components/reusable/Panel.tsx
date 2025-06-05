import { useState } from "react";

import { type ContentTypes } from "../types/types";
import Button from "./Button";

interface Props {
  content: ContentTypes[];
  panelType: "main" | "sub";
}

const Panel: React.FC<Props> = ({ content, panelType }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <div className="content">{content[activeTab].component}</div>
      <div className={`selection ${panelType}`}>
        {content.map((c, idx) => {
          return (
            <Button
              key={c.id}
              tabName={c.tabName}
              icon={c.icon}
              fncState={activeTab}
              fnc={setActiveTab}
              fncIdx={idx}
            />
          );
        })}
      </div>
    </>
  );
};

export default Panel;
