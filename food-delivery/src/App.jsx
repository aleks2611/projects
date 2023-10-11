import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/navigation/login/Login";
import ProtectedRoute from "./hooks/useProtectedRoute";
import Navbar from "./pages/navigation/navbar/Navbar";
import Logout from "./pages/navigation/Logout/Logout";
import NotFound from "./pages/navigation/notfound/NotFound";
import classes from "./App.module.css";
import Restorant from "./pages/restorant/Restorant";
import RestorantDetails from "./pages/restorant/restorantDetails/RestorantDetails";

function App() {
  return (
    <>
      <div className={classes["login"]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/restorant"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route index element={<Restorant />} />
                  <Route path=":id" element={<RestorantDetails />} />
                </Routes>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
