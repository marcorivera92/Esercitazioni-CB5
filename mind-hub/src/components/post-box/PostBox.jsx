import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
// Icons & Style
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import "./index.css";

const PostBox = ({ data }) => {
  const [user, setUser] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [isRepostActive, setRepostActive] = useState(false);
  const [isLikeActive, setLikeActive] = useState(false);

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  // RANDOM AVATAR
  useEffect(() => {
    fetch(
      `https://api.dicebear.com/5.x/avataaars/svg?seed=${data.userId}`
    ).then((data) => setAvatar(data));
  }, []);

  // EVENTS
  const repostHandler = () => {
    setRepostActive(!isRepostActive);
  };

  const likeHandler = () => {
    setLikeActive(!isLikeActive);
  };

  return (
    <div className="PostBox">
      <img src={avatar.url} alt="avatar" className="avatar" />
      <div className="post-layout">
        <div className="post__textContent">
          <div className="post__username">
            <h3>{user.firstName}</h3>
            <VerifiedIcon
              className="verified-icon"
              sx={{ fontSize: "1.2rem" }}
            />
            <p>@{user.firstName}</p>
          </div>

          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
        <div className="post__footer">
          <ModeCommentOutlinedIcon className="comment-icon" />
          <FavoriteBorderOutlinedIcon
            className={`heart-icon ${isLikeActive ? "heart-icon-active" : ""}`}
            onClick={likeHandler}
          />
          <RepeatOutlinedIcon
            className={`repost-icon ${
              isRepostActive ? "repost-icon-active" : ""
            }`}
            onClick={repostHandler}
          />
          <IosShareOutlinedIcon className="share-icon" />
        </div>
      </div>
    </div>
  );
};

export default PostBox;
