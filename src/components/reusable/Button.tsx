import { type JSX } from "react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";

interface Props {
  id: string;
  icon: JSX.Element;
  originRoute: string;
}

const Button: React.FC<Props> = ({ originRoute, id, icon }) => {
  const [activeState, setActiveState] = useState(true);
  const loc = useLocation();

  const navigateTo = `${originRoute}${id}`;

  const indexRouteInProjects =
    navigateTo === "/projects" ? "projects/compare-wot-app" : navigateTo;

  useEffect(() => {
    const pathParams =
      loc.pathname === "/"
        ? [""]
        : loc.pathname.split("/").filter(path => {
            if (path) return path;
          });
    if (!pathParams.includes(id)) {
      setActiveState(false);
    } else {
      setActiveState(true);
    }
  }, [loc]);

  return (
    <NavLink
      className={clsx("navLink-inherit-btn-styles", {
        "el-active": activeState,
      })}
      to={indexRouteInProjects}
    >
      {icon && <div>{icon}</div>}
    </NavLink>
  );
};

export default Button;
