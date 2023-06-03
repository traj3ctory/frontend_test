import { FC } from "react";

interface IProps {
  toggleLeft: () => void;
  toggleRight: () => void;
  rightNav: boolean;
}

/**
 * @author traj3ctory
 * @function @Header
 **/

const Header: FC<IProps> = ({ toggleLeft, toggleRight, rightNav }) => {
  return (
    <footer className="footer">
      <div className="side_nav_toggle container">
        <i className="bi bi-chevron-bar-right" onClick={toggleLeft} />
        {rightNav && (
          <i className="bi bi-chevron-bar-left" onClick={toggleRight} />
        )}
      </div>
    </footer>
  );
};

export default Header;
