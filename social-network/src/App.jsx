import { useContext } from "react";
import DasboardPage from "./components/DasboardPage";
import UserDetailsPage from "./components/UserDetailsPage";
import SocialNetworkContext from "./context/main-context";
import "./App.css";

function App() {
  const { user } = useContext(SocialNetworkContext);

  return (
    <div className="app">{user ? <UserDetailsPage /> : <DasboardPage />}</div>
  );
}

export default App;
