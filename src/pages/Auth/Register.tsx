import { FC, useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "@/shared/AuthLayout";
import { RegisterClientI } from "@/types";
import { LoginPage } from "@/helpers";

interface IProps {}

/**
 * @author traj3ctory
 * @function @Register
 **/

const Register: FC<IProps> = () => {
  const [client, setClient] = useState<RegisterClientI>({
    university_email: "",
    first_name: "",
    last_name: "",
    grad_year: "",
  });

  /**
   * @function @handleChange
   * @param e
   * @returns void
   * @description This function handles the form input change
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * @function @handleSubmit
   * @param e
   * @returns void
   * @description This function handles the form submission
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(client);
  };

  return (
    <AuthLayout>
      <div className="title">
        <h3 className="">Join and discover more!</h3>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group mb-lg-4 mb-3">
          <label htmlFor="email">Enter your University email:</label>
          <div className="input-group">
            <span className="input-group-text" id="email_icon">
              <i className="bi bi-envelope-at text_gray" />
            </span>
            <input
              type="email"
              name="university_email"
              id="university_email"
              className="form-control"
              placeholder="example@kumail.com"
              value={client.university_email}
              onChange={handleChange}
              aria-label="Email"
              aria-describedby="email_icon"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="form-group mb-lg-4 mb-3">
          <label htmlFor="first_name">Enter a First Name:</label>
          <div className="input-group">
            <span className="input-group-text" id="first_name_icon">
              <i className="bi bi-person text_gray" />
            </span>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="form-control"
              placeholder="Ex. John"
              value={client.first_name}
              onChange={handleChange}
              aria-label="first_name"
              aria-describedby="first_name_icon"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="form-group mb-lg-4 mb-3">
          <label htmlFor="last_name">Enter a First Name:</label>
          <div className="input-group">
            <span className="input-group-text" id="last_name_icon">
              <i className="bi bi-person text_gray" />
            </span>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="form-control"
              placeholder="Ex. Grant"
              value={client.last_name}
              onChange={handleChange}
              aria-label="last_name"
              aria-describedby="last_name_icon"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="form-group mb-lg-4 mb-3">
          <label htmlFor="grad_year">Enter a First Name:</label>
          <div className="input-group">
            <span className="input-group-text" id="grad_year_icon">
              <i className="bi bi-calendar-week text_gray" />
            </span>
            <input
              type="date"
              name="grad_year"
              id="grad_year"
              className="form-control"
              placeholder="2026"
              value={client.grad_year}
              onChange={handleChange}
              aria-label="grad_year"
              aria-describedby="grad_year_icon"
              autoComplete="off"
            />
          </div>
        </div>

        <button className="btn btn-primary w-100 text-center py-2 rounded-1 mt-3">
          Next
        </button>
      </form>

      <div className="text-center mt-lg-5 mt-3 mb-3">
        <p className="mb-3 text_gray">
          Already have an account ? <Link to={LoginPage}>Login</Link>
        </p>

        <small>
          By Clicking on 'Login' you've agreed to the
          <br />
          <span className="cursor_pointer">Terms of use</span> and{" "}
          <span className="cursor_pointer">Privacy Policy.</span>{" "}
        </small>
      </div>
    </AuthLayout>
  );
};

export default Register;
