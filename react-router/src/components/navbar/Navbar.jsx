import { NavLink, Link, Outlet } from "react-router-dom";

import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <div className={styles.Navbar}>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "black" : "",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              style={({ isActive }) => ({
                color: isActive ? "#0a0a0a" : "",
              })}
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              style={({ isActive }) => ({
                color: isActive ? "#0a0a0a" : "",
              })}
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
