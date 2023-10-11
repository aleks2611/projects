import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/navigation/login/Login";
import ProtectedRoute from "./hooks/useProtectedRoute";
import Navbar from "./pages/navigation/navbar/Navbar";
import Logout from "./pages/navigation/Logout/Logout";
import NotFound from "./pages/navigation/notfound/NotFound";
import classes from "./App.module.css";

function App() {
  return (
    <>
      <div className={classes["login"]}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
