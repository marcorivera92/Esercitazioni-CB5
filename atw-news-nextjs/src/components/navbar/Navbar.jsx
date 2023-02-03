import Link from "next/link";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <h3>ATW˙</h3>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/news">News</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
