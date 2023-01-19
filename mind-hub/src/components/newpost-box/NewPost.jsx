import { useState } from "react";
import ButtonTweet from "../../atoms/button-tweet";
import ActionsBar from "../actions-bar/ActionsBar";

import "./index.css";

const NewPost = () => {
  const [newPost, setNewPost] = useState("");
  const sendPost = (e) => {
    e.preventDefault();
    setNewPost("");
  };

  const postHandler = (e) => {
    setNewPost(e.target.value);
  };

  return (
    <div className="NewPost">
      <form>
        <div className="postBox__input">
          <img
            src="/images/batman.png"
            alt="user-avatar"
            className="user_avatar"
          />
          <input
            onChange={postHandler}
            value={newPost}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <div className="postBox__footer">
          <ActionsBar variant="desktop-variant" />
          <ButtonTweet TweetHandler={sendPost} />
        </div>
      </form>
    </div>
  );
};

export default NewPost;
