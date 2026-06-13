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
  const [focusState, setFocusState] = useState(true);
  const loc = useLocation();

  useEffect(() => {
    const pathParams =
      loc.pathname === "/"
        ? [""]
        : loc.pathname.split("/").filter(id => {
            if (id) return id;
          });

    if (!pathParams.includes(id)) {
      console.log(pathParams);
      setFocusState(false);
    }
  }, [loc]);

  const navigateTo = `${originRoute}${id}`;

  const indexRouteInProjects =
    navigateTo === "/projects" ? "projects/compare-wot-app" : navigateTo;

  return (
    <NavLink
      className={clsx("navLink-inherit-btn-styles", { focus: focusState })}
      to={indexRouteInProjects}
    >
      {icon && <div>{icon}</div>}
    </NavLink>
  );
};

export default Button;
