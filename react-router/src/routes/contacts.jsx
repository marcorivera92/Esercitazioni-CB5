import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/contacts.module.scss";

export default function Contacts() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  const userHandle = (id) => {
    navigate(`/contacts/${id}`);
  };

  return (
    <div className={styles.Contacts}>
      <h1>Contacts</h1>
      {users.map((user) => (
        <div
          className={styles.layout}
          key={user.id}
          onClick={() => userHandle(user.id)}
        >
          <div className={styles.userInfo}>
            <div className={styles.imageWrapper}>
              <img src={user.image} alt={user.firstName} />
            </div>
            <div className={styles.userText}>
              <h3> {user.firstName}</h3>
              <h3> {user.lastName}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
