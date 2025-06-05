import { type JSX } from "react";
import clsx from "clsx";

interface Props {
  tabName?: string;
  icon?: JSX.Element;
  fncState: number;
  fnc: React.Dispatch<React.SetStateAction<number>>;
  fncIdx: number;
}

const Button: React.FC<Props> = ({ tabName, icon, fncState, fnc, fncIdx }) => {
  return (
    <button
      className={clsx("", { focus: fncState === fncIdx })}
      type="button"
      onClick={() => fnc(fncIdx)}
    >
      {icon && <div>{icon}</div>}
      {tabName && <p>{tabName}</p>}
    </button>
  );
};

export default Button;
