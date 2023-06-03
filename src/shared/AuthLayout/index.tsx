import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

/**
 * @author traj3ctory
 * @function @AuthLayout
 **/

const AuthLayout: FC<IProps> = ({ children }) => {
  return (
    <section className="auth_layout">
      <div className="container-lg container-fluid w-100">
        <div className="row align-items-center py-lg-0 py-3">
          <div className="col-lg-7 col-md-6 col-12">
            <p className="description">
              A Safe Place for Students to Connect with Each Other,
              <br className="d-lg-block d-none" /> Engage in Transactions and Succeed During their
              <br className="d-lg-block d-none" /> College Career.
            </p>
          </div>
          <div className="col-lg-5 col-md-6 col-12">
            <div className="card card-body border-0 shadow-sm rounded-3 form">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
