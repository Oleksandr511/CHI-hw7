import React from "react";
import { Link, Outlet } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Container
} from "@mui/material";

import Hero from "./hero/heroes/id/hero";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => (event) => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Hero id={1} />
    </Box>
  );
  return (
    <Container className="home">
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <nav>
        <ul>
          <li>
            <Link to="heroes">Go to Rick & Morty API</Link>
            <br />
            <Link to="hero">Go to hero page</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Button onClick={toggleDrawer(true)}>Open drawer</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
      <Outlet />
    </Container>
  );
}
