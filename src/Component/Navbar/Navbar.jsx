import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={s.navigation}>
      <ul>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/dialogs">
            Message
          </NavLink>
        </li>
        <li className={s.item}>
          <a className={s.link} href="#">
            Message
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="#">
            Message
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
