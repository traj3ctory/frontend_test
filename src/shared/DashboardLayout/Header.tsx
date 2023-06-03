import { FC, useState } from "react";
import asset from "@/assets/asset1.jpg";

interface IProps {}

/**
 * @author traj3ctory
 * @function @Header
 **/

const Header: FC<IProps> = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <header className="header">
      <nav className="container-fluid px-lg-5">
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

        <div className="d-flex align-items-center gap-4">
          <span>
            <i className="bi bi-bell-fill" />
          </span>
          <span>
            <i className="bi bi-chat-left-text-fill" />
          </span>
          <img
            src={asset}
            alt="user_profile_img"
            className="img_fluid rounded-circle"
            width={30}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
