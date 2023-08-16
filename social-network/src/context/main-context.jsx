import { createContext, useState } from "react";
import { fetchPosts, fetchUser } from "../service/api";

const SocialNetworkContext = createContext();
function Provider({ children }) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();

  const fetchUserData = (userId) => {
    fetchUser(userId).then((data) => {
      setUser(data);
    });
  };

  const fetchPostsData = () => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  };

  const valueToShare = {
    posts,
    user,
    setUser,
    fetchUserData,
    fetchPostsData,
  };
  return (
    <SocialNetworkContext.Provider value={valueToShare}>
      {children}
    </SocialNetworkContext.Provider>
  );
}
export { Provider };
export default SocialNetworkContext;
