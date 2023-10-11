import { Link } from "react-router-dom";
import appContext from "../../../context/Provider";
import { useContext } from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  const { user } = useContext(appContext);

  return (
    <>
      {" "}
      {user && (
        <nav className={classes["login-navbar"]}>
          <div className={classes["login-navbar-links"]}>
            <>
              <Link to="/">Home</Link>
              <Link to="/restorant">Restorant</Link>
              <Link to="/logout">Logout</Link>
            </>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
