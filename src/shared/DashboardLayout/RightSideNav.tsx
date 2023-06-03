import { FC, useState } from "react";
import { CoursesI, ConnectionsI } from "@/types";
import { coursesData, connectionsData } from "./DemoData";
import asset from "@/assets/asset1.jpg";

interface IProps {
  display: boolean;
}

/**
 * @author traj3ctory
 * @function @RightSideNav
 **/

const RightSideNav: FC<IProps> = ({ display }) => {
  const [search, setSearch] = useState<string>("");

  return (
    <aside className={`right_nav px-3 rounded-3 pt-3 ${display && "right_expand"}`}>
      <section className="courses">
        <div className="title">
          <h5>Courses</h5>
          <small className="cursor_pointer text-primary">See All</small>
        </div>
        {coursesData.map((el: CoursesI, i: number) => {
          return (
            <div key={i} className="body">
              <div className="d-flex gap-2">
                <div className="initial">{el.initial}</div>
                <div>
                  <h5 className="mb-1">{el.title}</h5>
                  <small className="text_gray">{el.code}</small>
                </div>
              </div>
              <small className="cursor_pointer text-primary">View</small>
            </div>
          );
        })}
      </section>

      <section className="connections">
        <div className="title">
          <h5>Connections</h5>
          <span className="cursor_pointer text-primary">Sel All</span>
        </div>

        <div className="input-group search_bar">
          <span className="input-group-text br" id="search_icon">
            <i className="bi bi-search" />
          </span>
          <input
            type="text"
            name="search"
            id="search"
            className="form-control bl"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
            aria-describedby="search_icon"
            autoComplete="off"
          />
        </div>

        <div className="scrollable">
          {connectionsData.map((el: ConnectionsI, i: number) => {
            return (
              <div key={i} className="body">
                <div className="d-flex align-items-center gap-2">
                  <img src={el.image || asset} alt={el.name} width={40} />
                  <h5 className="mb-1">{el.name}</h5>
                </div>
                {el.status && <span className="status" />}
              </div>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default RightSideNav;
