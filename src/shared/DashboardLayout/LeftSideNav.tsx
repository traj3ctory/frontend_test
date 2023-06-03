import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Routes from "./Route";
import { RouteI } from "@/types";

interface IProps {
  display: boolean;
}

/**
 * @author traj3ctory
 * @function @LeftSideNav
 **/

const LeftSideNav: FC<IProps> = ({ display }) => {
  const location = useLocation();

  return (
    <aside className={`left_nav px-2 pt-3 ${display && "left_expand"}`}>
      <ul>
        {Routes.map((el: RouteI, i: number) => {
          const isActive = location.pathname === el.path;
          return (
            <li
              key={i}
              className={`${isActive && "active"} ${
                el.comingSoon && "disabled"
              }`}
            >
              <NavLink
                to={el.path}
                className={`${el.comingSoon && "disabled"}`}
              >
                <i className={`bi bi-${el.icon}`} />
                &ensp;{el.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default LeftSideNav;
