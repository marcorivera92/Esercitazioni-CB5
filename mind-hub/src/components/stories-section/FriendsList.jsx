import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Friend from "../stories-friend/Friend";
import "./index.css";

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    GET("users").then((data) => setFriendsList(data.users));
  }, []);

  return (
    <div className="FriendsList">
      {friendsList.map((friend) => (
        <Friend data={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default FriendsList;
