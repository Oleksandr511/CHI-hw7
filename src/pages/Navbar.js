import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ".././navbar.css";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <Link
            // color="inherit"
            to="heroes"
            className={location.pathname === "/heroes" ? "active" : "nav-link"}
          >
            heroes
          </Link>
        </li>

        <li>
          <Link
            to="hero"
            className={location.pathname === "/hero" ? "active" : "nav-link"}
          >
            hero
          </Link>
        </li>
        <li>
          <Link
            to="heroesMui"
            className={
              location.pathname === "/heroesMui" ? "active" : "nav-link"
            }
          >
            heroesMui
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : "nav-link"}
          >
            home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
