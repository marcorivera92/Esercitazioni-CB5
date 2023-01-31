import { useEffect, useState } from "react";
import { GET } from "../utils/http";
import { Link, useNavigate, Outlet } from "react-router-dom";

import styles from "./styles/posts.module.scss";

const Posts = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    GET(`posts`).then((data) => setPosts(data.posts));
  }, []);

  const postHandle = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <>
      <div className={styles.Posts}>
        <h1>Posts</h1>
        {posts.map((post) => (
          <div
            className={styles.layout}
            key={post.id}
            onClick={() => postHandle(post.id)}
          >
            <div className={styles.postInfo}>
              <div className={styles.imageWrapper}>
                <h3>{post.id}</h3>
              </div>
              <div className={styles.postText}>
                <h3> {post.title}</h3>
                <p> {`#${post.tags[0]} #${post.tags[1]} #${post.tags[2]}`} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default Posts;
