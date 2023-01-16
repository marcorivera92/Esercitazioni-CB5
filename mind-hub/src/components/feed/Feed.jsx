import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import NewPost from "../newpost-box/NewPost";
import PostBox from "../post-box/index";
import "./index.css";

const Feed = () => {
  const [feedSection, setFeedSection] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) => setFeedSection(posts));
  }, []);

  return (
    <div className="Feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <NewPost />

      {feedSection.map((post) => (
        <PostBox data={post} key={post.id} />
      ))}
    </div>
  );
};

export default Feed;
