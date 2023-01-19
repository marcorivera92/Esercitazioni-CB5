import { useState } from "react";
import ButtonTweet from "../../atoms/button-tweet";
import "./index.css";

const NewPostMobile = ({ setModalActive }) => {
  const [newPost, setNewPost] = useState("");

  // EVENTS
  const sendPost = (e) => {
    e.preventDefault();
    setNewPost("");
    setModalActive(false);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setModalActive(false);
  };

  const postHandler = (e) => {
    setNewPost(e.target.value);
  };

  return (
    <div className="NewPostMobile">
      <form>
        <div className="buttons">
          <button className="cancel" onClick={closeModal}>
            Cancel
          </button>
          <ButtonTweet TweetHandler={sendPost} />
        </div>

        <div className="postBox__input">
          <img
            src="/images/batman.png"
            alt="user_avatar"
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
