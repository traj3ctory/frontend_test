import { FC, ReactNode } from "react";
import Header from "./Header";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

/**
 * @author traj3ctory
 * @function @DashboardLayout
 **/

const DashboardLayout: FC<IProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <LeftSideNav />
        <main>{children}</main>
        <RightSideNav />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
