import { useState } from "react";
import ButtonTweet from "../../atoms/button-tweet";
import "./index.css";

const NewPostMobile = () => {
  const [newPost, setNewPost] = useState("");

  // EVENTS
  const sendPost = (e) => {
    e.preventDefault();
    setNewPost("");
  };

  const postHandler = (e) => {
    setNewPost(e.target.value);
  };

  return (
    <div className="NewPostMobile">
      <form>
        <div className="buttons">
          <button className="cancel">Cancel</button>
          <ButtonTweet TweetHandler={sendPost} />
        </div>

        <div className="postBox__input">
          <img
            src="https://api.dicebear.com/5.x/bottts/svg?seed=Loki"
            alt="avatar"
            className="user_avatar"
          />
          <textarea
            onChange={postHandler}
            value={newPost}
            placeholder="What's happening?"
            type="text"
            maxLength={"280"}
          />
        </div>
      </form>
    </div>
  );
};

export default NewPostMobile;
