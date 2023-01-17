import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import NewPost from "../newpost-box/NewPost";
import PostBox from "../post-box/index";
import AddIcon from "@mui/icons-material/Add";
import "./index.css";

const Feed = () => {
  const [feedSection, setFeedSection] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) => setFeedSection(posts));
  }, []);

  return (
    <div className="Feed">
      {/* <NewPost /> */}

      {feedSection.map((post) => (
        <PostBox data={post} key={post.id} />
      ))}
      <button className="btn-post__mobile">
        <AddIcon fontSize="medium" sx={{ fontSize: "1.6rem" }} />
      </button>
    </div>
  );
};

export default Feed;
