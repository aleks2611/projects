import { useState } from "react";
import useContextProvider from "../../../hooks/useContextProvider";
import classes from "./Login.module.css";

const initialValue = {
  username: "",
  password: "",
};

function Login() {
  const [userData, setUserData] = useState(initialValue);
  const { login } = useContextProvider();

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserData((data) => {
      return { ...data, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <>
      <form className={classes["login-form"]} onSubmit={onSubmit}>
        <label className={classes["login-form-label"]}>User Name</label>
        <input
          className={classes["login-form-input"]}
          value={userData.username}
          name="username"
          onChange={onChange}
        />
        <label className={classes["login-form-label"]}>Password</label>
        <input
          className={classes["login-form-input"]}
          value={userData.password}
          name="password"
          onChange={onChange}
        />
        <button className={classes["login-form-button"]} type="submit">
          Login
        </button>
      </form>
    </>
  );
}
export default Login;
