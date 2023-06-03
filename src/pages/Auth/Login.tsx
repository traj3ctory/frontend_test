import { FC, useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "@/shared/AuthLayout";
import { LoginClientI } from "@/types";
import { RegisterPage } from "@/helpers";

interface IProps {}

/**
 * @author traj3ctory
 * @function @Login
 **/

const Login: FC<IProps> = () => {
  const [client, setClient] = useState<LoginClientI>({
    email: "",
    password: "",
  });

  /**
   * @function handlePasswordToggle
   * @returns void
   * @description This function toggles the password visibility
   */

  const handlePasswordToggle = () => {
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const passwordIcon = document.getElementById(
      "password_toggle_icon"
    ) as HTMLElement;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordIcon.classList.remove("bi-eye");
      passwordIcon.classList.add("bi-eye-slash");
      return;
    }
    passwordInput.type = "password";
    passwordIcon.classList.remove("bi-eye-slash");
    passwordIcon.classList.add("bi-eye");
  };

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
        <h3 className="">Hey, welcome back!</h3>
        <p>Continue enjoying amazing discoveries</p>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group mb-lg-5 mb-3">
          <label htmlFor="email">Enter your University email:</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="email_icon">
              <i className="bi bi-envelope-at text_gray" />
            </span>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={client.email}
              onChange={handleChange}
              aria-label="Email"
              aria-describedby="email_icon"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="form-group mb-lg-5 mb-3">
          <label htmlFor="password">Enter a password:</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="password_icon">
              <i className="bi bi-lock text_gray" />
            </span>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control br"
              placeholder="Enter your password"
              value={client.password}
              onChange={handleChange}
              aria-label="Password"
              aria-describedby="password_icon"
              autoComplete="off"
            />
            <span
              className="input-group-text bl cursor_pointer"
              onClick={handlePasswordToggle}
              id="password_toggle"
            >
              <i className="bi bi-eye text_gray" id="password_toggle_icon" />
            </span>
          </div>
        </div>

        <button className="btn btn-primary w-100 text-center py-2 rounded-1 mt-3">
          Login
        </button>
      </form>

      <div className="text-center mt-lg-5 mt-3 mb-md-3">
        <p className="mb-0 text_gray">
          Don't have an account ? <Link to={RegisterPage}>Sign Up</Link>
        </p>
        <div className="mb-lg-4 mb-3">
          <span className="cursor_pointer">Forgot your password?</span>
        </div>

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

export default Login;
