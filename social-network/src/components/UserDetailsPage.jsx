import { useContext } from "react";
import SocialNetworkContext from "../context/main-context";

const HEADER = "More details of user:";

function UserDetailsPage() {
  const { user, setUser } = useContext(SocialNetworkContext);

  function clickHandler() {
    setUser();
  }

  return (
    <div className="info-users">
      <h1 className="title-detais">{HEADER}</h1>
      <button onClick={clickHandler} className="btn-back">
        Back
      </button>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>
        Address: {user.address.street}, {user.address.suite},{" "}
        {user.address.city}, {user.address.zipcode}
      </p>
      <p>
        Geo: Lat: {user.address.geo.lat}, Lng:{" "}
        {user.address.geo.lng}
      </p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>
        Company: {user.company.name}, Catch Phrase:{" "}
        {user.company.catchPhrase}, BS: {user.company.bs}
      </p>
    </div>
  );
}
export default UserDetailsPage;
