import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";

const PostBox = ({ data }) => {
  const [user, setUser] = useState([]);
  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  //   RANDOM AVATAR
  useEffect(() => {
    fetch(
      `https://api.dicebear.com/5.x/avataaars/svg?seed=${data.userId}`
    ).then((data) => setAvatar(data));
  }, []);

  return (
    <div className="PostBox">
      <img src={avatar.url} alt="avatar" className="avatar" />
      <div className="post-layout">
        <div className="post__textContent">
          <p>@{user.firstName}</p>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
        <div className="post__footer">
          <img src="" alt="retweet" />
          <img src="" alt="like" />
          <img src="" alt="share" />
        </div>
      </div>
    </div>
  );
};

export default PostBox;
