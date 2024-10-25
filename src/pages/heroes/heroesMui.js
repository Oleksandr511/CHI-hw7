import { getCharacters } from "../../utils/getCharacters";
import { useEffect, useState } from "react";
import React from "react";
import DataGridDemo from "./dataGridDemo";
import {
  Drawer,
  Box,
  Switch,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import Hero from "../hero/heroes/id/hero";
import { dark } from "@mui/material/styles/createPalette";

export default function HeroesMui() {
  const [characters, setCharacters] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    getHeroes();
  }, []);
  useEffect(() => {
    const chRows = characters.map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
      };
    });
    setRows(chRows);
  }, [characters]);
  const getHeroes = async () => {
    const res = await getCharacters(1);
    setCharacters(res.characters);
  };
  const [selectedHeroId, setSelectedHeroId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleRowClick = (heroId) => {
    setSelectedHeroId(heroId);
    setIsOpen(true); // Відкриваємо Drawer
    console.log("heroId", heroId);
  };
  const DrawerList = (
    <Box
      sx={{ width: 350 }}
      className={{ display: "flex", justifyContent: "center" }}
      role="presentation"
      onClick={() => setIsOpen(false)}
    >
      <Hero id={selectedHeroId} />
    </Box>
  );
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", // Перемикання теми
      primary: {
        main: "#0066CC",
        dark: "#007FFF",
      },
    },

    typography: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 1,
          bgcolor: "lightblue",
          "&:hover": {
            bgcolor: "#14f0ce",
          },
        }}
      >
        <Typography variant="h1" component="h1">
          HeroesMui
        </Typography>
        <Typography sx={{ color: "darkblue" }} component="p" variant="p">
          Switch theme
        </Typography>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          // color="red"
        />
        <DataGridDemo theme={theme} rows={rows} rowClick={handleRowClick} />
        <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
