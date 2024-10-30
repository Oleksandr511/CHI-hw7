import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Heroes from "./pages/heroes/heroes";
import Hero from "./pages/hero/heroes/id/hero";
import Navbar from "./pages/Navbar";
// import Heroes from "./pages/heroes/heroes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";
import { Box } from "@mui/system";
import About from "./pages/about/About";

const App = () => {
  const NotFound = () => {
    return <h1>404 Not Found</h1>;
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="heroes" element={<Heroes />}>
          <Route path=":id" element={<Hero />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
