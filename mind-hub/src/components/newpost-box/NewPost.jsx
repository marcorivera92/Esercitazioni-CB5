import { useState } from "react";
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
            src="https://api.dicebear.com/5.x/bottts/svg?seed=Loki"
            alt="avatar"
            className="user_avatar"
          />
          <input
            onChange={postHandler}
            value={newPost}
            placeholder="What's happening?"
            type="text"
          />
        </div>

        <button onClick={sendPost} type="submit" className="newPost__button">
          Tweet
        </button>
      </form>
    </div>
  );
};

export default NewPost;
