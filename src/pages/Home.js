import React from "react";
import { Link, Outlet } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Box, Container, Typography } from "@mui/material";

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
      <Typography variant="h1">Home</Typography>
      <Typography variant="body1">Welcome to the Home page!</Typography>
    </Container>
  );
}
