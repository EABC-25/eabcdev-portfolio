import { type JSX } from "react";
import Button from "./Button";

type ContentTypes = {
  id: string;
  tabName?: string;
  icon: JSX.Element;
};

interface Props {
  originRoute: string;
  content: ContentTypes[];
  panelType: "main" | "sub";
}

const Panel: React.FC<Props> = ({ originRoute, content, panelType }) => {
  return (
    <>
      <div className={`selection ${panelType}`}>
        {content.map(c => {
          return (
            <Button
              key={c.id}
              originRoute={originRoute}
              id={c.id}
              icon={c.icon}
            />
          );
        })}
      </div>
    </>
  );
};

export default Panel;
