import { FC, ReactNode } from "react";
import Header from "./Header";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";
// import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

/**
 * @author traj3ctory
 * @function @DashboardLayout
 **/

const DashboardLayout: FC<IProps> = ({ children }) => {
  return (
    <section className="dashboard_layout">
      <Header />
      <div className="wrapper">
        <LeftSideNav />
        <main className="content container-fluid">{children}</main>
        <RightSideNav />
      </div>
      {/* <Footer /> */}
    </section>
  );
};

export default DashboardLayout;
