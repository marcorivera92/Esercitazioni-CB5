import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles/user.module.scss";

const User = () => {
  let { userId } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className={styles.User}>
      <div className={styles.userInfo}>
        <div className={styles.imageWrapper}>
          <img src={user.image} alt={user.firstName} />
        </div>
        <div className={styles.userText}>
          <h3> {user.firstName}</h3>
          <h3> {user.lastName}</h3>
        </div>

        <div className={styles.userAddress}>
          <div className={styles.addressBox}>
            <h4>Phone</h4>
            <p> {user.phone}</p>
          </div>

          <div className={styles.addressBox}>
            <h4>Email</h4>
            <p> {user.email}</p>
          </div>

          <div className={styles.addressBox}>
            <h4>Social Media Handle</h4>
            <p> @{user.username}</p>
          </div>
        </div>
      </div>
      <Link to="/contacts"> ⃖ Back to Contacts </Link>
    </div>
  );
};

export default User;
