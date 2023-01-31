import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GET } from "../utils/http";
import Calendar from "../components/calendar/";
import styles from "./styles/post.module.scss";

const Post = () => {
  let { id } = useParams();

  const [post, setPost] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GET(`posts/${id}`).then((data) => setPost(data));
    setLoading(false);
  }, []);

  return (
    <div className={styles.Post}>
      <div className={styles.postInfo}>
        <div className={styles.todayDate}>
          <Calendar />
        </div>
        {isLoading ? (
          "Loading..."
        ) : (
          <div className={styles.postText}>
            <h3> {post.title}</h3>
            <p> {post.body}</p>
          </div>
        )}
      </div>
      <Link to="/posts"> ⃖ Back to Posts</Link>
    </div>
  );
};

export default Post;
