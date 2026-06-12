import { type JSX } from "react";
import { NavLink } from "react-router";

interface Props {
  id: string;
  icon: JSX.Element;
  originRoute: string;
}

const Button: React.FC<Props> = ({ originRoute, id, icon }) => {
  return (
    <NavLink to={`${originRoute}${id}`}>
      <button type="button">{icon && <div>{icon}</div>}</button>
    </NavLink>
  );
};

export default Button;
