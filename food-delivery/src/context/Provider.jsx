import { createContext, useEffect, useState } from "react";
import { loginUser } from "../api/loginApi";
import { useNavigate } from "react-router-dom";
const appContext = createContext();

function Provider({ children }) {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const login = async (userData) => {
    const response = await loginUser(userData);
    response && localStorage.setItem("user", JSON.stringify(response));
    setUser(response);
    navigate("/");
  };

  const setUserFromLocalStorage = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
  };

  const valueToShared = {
    user,
    logout,
    login,
  };

  useEffect(() => {
    setUserFromLocalStorage();
  }, []);

  return (
    <appContext.Provider value={valueToShared}>{children}</appContext.Provider>
  );
}
export { Provider };
export default appContext;
