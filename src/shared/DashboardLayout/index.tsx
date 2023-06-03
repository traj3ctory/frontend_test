import { FC, useState, ReactNode } from "react";
import Header from "./Header";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
  rightNav?: boolean;
}

/**
 * @author traj3ctory
 * @function @DashboardLayout
 **/

const DashboardLayout: FC<IProps> = ({ children, rightNav = true }) => {
  const [isLeftOpen, setLeftIsOpen] = useState(false);
  const [isRightOpen, setRightIsOpen] = useState(false);

  const handleLeftToggle = () => {
    setLeftIsOpen(!isLeftOpen);
  };
  const handleRightToggle = () => {
    setRightIsOpen(!isRightOpen);
  };
  return (
    <section className="dashboard_layout">
      <Header toggleLeft={handleLeftToggle} toggleRight={handleRightToggle} />
      <div className="wrapper">
        <LeftSideNav display={isLeftOpen} />
        <main
          className={`content px-lg-3 container-fluid ${
            !rightNav && "no_right_nav"
          }`}
        >
          {children}
        </main>
        {rightNav && <RightSideNav display={isRightOpen} />}
        <div
          className={`${isLeftOpen && "overlay"}`}
          onClick={handleLeftToggle}
        />
           <div
          className={`${isRightOpen && "overlay"}`}
          onClick={handleRightToggle}
        />
      </div>
      <Footer rightNav={rightNav} toggleLeft={handleLeftToggle} toggleRight={handleRightToggle} />
    </section>
  );
};

export default DashboardLayout;
