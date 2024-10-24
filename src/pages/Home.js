import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <nav>
        <ul>
          <li>
            <Link to="api">Go to Rick & Morty API</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
