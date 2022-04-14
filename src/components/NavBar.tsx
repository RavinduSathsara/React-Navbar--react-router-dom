import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState(0);

  return (
    <React.Fragment>
      <ul>
        <li>
          <Link
            onClick={(): void => {
              setActive(0);
            }}
            className={active === 0 ? "active" : ""}
            to="/home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={(): void => {
              setActive(1);
            }}
            className={active === 1 ? "active" : ""}
            to="news"
          >
            News
          </Link>
        </li>
        <li>
          <Link
            onClick={(): void => {
              setActive(3);
            }}
            className={active === 3 ? "active" : ""}
            to="contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            onClick={(): void => {
              setActive(4);
            }}
            className={active === 4 ? "active" : ""}
            to="about"
          >
            About
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavBar;
