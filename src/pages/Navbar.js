import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ".././navbar.css";
import { Drawer, List, ListItemButton, MenuList } from "@mui/material";

export default function Navbar() {
  const location = useLocation();
  return (
    <Drawer
      sx={{
        backgroundColor: "#333",
        color: "white",
        width: 240,
        "& .MuiDrawer-paper": {
          backgroundColor: "#333",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <MenuList className="navigation">
        <List className="nav-list">
          <ListItemButton>
            <Link
              to="heroes"
              className={
                location.pathname === "/heroes" ? "active" : "nav-link"
              }
            >
              heroes
            </Link>
          </ListItemButton>

          <ListItemButton>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : "nav-link"}
            >
              home
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link
              to="about"
              className={location.pathname === "/about" ? "active" : "nav-link"}
            >
              about
            </Link>
          </ListItemButton>
        </List>
      </MenuList>
    </Drawer>
  );
}
