import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.Navbar}>
      <ul>
        <div className={styles.wrapperLink}>
          <li>
            <Link href="/">Home</Link>
          </li>
        </div>
        <div className={styles.wrapperLink}>
          <li>
            <Link href="/characters">Characters</Link>
          </li>
        </div>
        <div className={styles.wrapperLink}>
          <li>
            <Link href="/about">About</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
