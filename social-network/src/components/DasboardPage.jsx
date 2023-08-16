import { useContext, useEffect } from "react";
import Card from "../sheared/Card";
import SocialNetworkContext from "../context/main-context";

function DasboardPage() {
  const { posts, fetchPostsData, fetchUserData } =
    useContext(SocialNetworkContext);

  useEffect(() => {
    fetchPostsData();
  }, []);

  function handleCardClick(userId) {
    fetchUserData(userId);
  }

  const showPosts = posts.map((data) => (
    <Card
      onClick={() => {
        handleCardClick(data.userId);
      }}
      key={data.id}
      title={data.title}
      body={data.body}
      userId={data.userId}
    />
  ));
  return <div className="dashboard-page">{showPosts} </div>;
}
export default DasboardPage;
