import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Heroes from "./pages/heroes/heroes";
import Hero from "./pages/hero/heroes/id/hero";
import Navbar from "./pages/Navbar";
import HeroesMui from "./pages/heroes/heroesMui";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";
import { Box } from "@mui/system";

const App = () => {
  const NotFound = () => {
    return <h1>404 Not Found</h1>;
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Box className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="heroes" element={<Heroes />} />
          <Route path="heroesMui" element={<HeroesMui />} />
          <Route path="*" element={<NotFound />} />
          <Route path="hero" element={<Hero id={1} />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
