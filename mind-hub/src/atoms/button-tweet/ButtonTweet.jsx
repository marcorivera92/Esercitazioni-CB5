import "./index.css";

const ButtonTweet = ({ TweetHandler, variant }) => {
  return (
    <button
      onClick={TweetHandler}
      type="submit"
      className={`ButtonTweet ${
        variant === "wide-variant" ? "wide-variant" : ""
      }`}
    >
      Tweet
    </button>
  );
};

export default ButtonTweet;
