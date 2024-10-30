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
import { Outlet, useNavigate } from "react-router-dom";
import { useRequest } from "ahooks";

export default function Heroes() {
  const [rows, setRows] = React.useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const { data, loading, error } = useRequest(() => getCharacters(1));

  useEffect(() => {
    const chRows = data?.characters.map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
      };
    });
    setRows(chRows);
  }, [data]);

  const [isOpen, setIsOpen] = useState(false);
  const handleRowClick = (heroId) => {
    navigate(`/heroes/${heroId}`);
    setIsOpen(true);
  };
  const DrawerList = (
    <Box
      sx={{ width: 350 }}
      className={{ display: "flex", justifyContent: "center" }}
      role="presentation"
      onClick={() => setIsOpen(false)}
    >
      <Outlet />
    </Box>
  );
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
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
  return loading ? (
    <Typography variant="h1" style={{ background: "pink" }}>
      Loading...
    </Typography>
  ) : (
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
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <DataGridDemo theme={theme} rows={rows} rowClick={handleRowClick} />
        <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
