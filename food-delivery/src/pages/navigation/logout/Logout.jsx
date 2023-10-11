import { useContext, useEffect } from "react";
import appContext from "../../../context/Provider";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useContext(appContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout(null);
    navigate("/login");
  }, []);

  return <></>;
};

export default Logout;
