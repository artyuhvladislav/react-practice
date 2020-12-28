import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.navigation}>
      <ul>
          <li className={s.item}>
              <a className={s.link} href="#">Message</a>
          </li>
          <li className={s.item}>
              <a className={s.link} href="#">Message</a>
          </li>
          <li className={s.item}>
              <a className={s.link} href="#">Message</a>
          </li>
          <li className={s.item}>
              <a className={s.link} href="#">Message</a>
          </li>
      </ul>
    </nav>
  );
};
export default Navbar;
