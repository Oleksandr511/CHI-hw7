import React, { useEffect } from "react";
import { getCharacters } from "../../utils/getCharacters";
import { Box, Button, Drawer, Typography } from "@mui/material";
import Hero from "../hero/heroes/id/hero";
import { DataGrid } from "@mui/x-data-grid";

export default function Heroes() {
  const [characters, setCharacters] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const renderPage = React.useRef(0);
  const [loader, setLoader] = React.useState(false);
  const [prev, setPrev] = React.useState(0);
  const [next, setNext] = React.useState(1);
  // const [heroId, setHeroId] = React.useState(1);
  const refHeroId = React.useRef(1);
  useEffect(() => {
    getNextCharacters();
  }, []);
  const getNextCharacters = async () => {
    setLoader(true);

    const {
      characters: newCharacters,
      next: nextPg,
      prev: prevPg,
    } = await getCharacters(++renderPage.current);
    setPage(renderPage.current);
    setCharacters(newCharacters);
    setPrev(prevPg);
    setNext(nextPg);
    setLoader(false);
  };
  const getPrevCharacters = async () => {
    setLoader(true);
    const {
      characters: newCharacters,
      next: nextPg,
      prev: prevPg,
    } = await getCharacters(--renderPage.current);
    setPrev(prevPg);
    setNext(nextPg);
    setPage(renderPage.current);
    setCharacters(newCharacters);
    setLoader(false);
  };
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen, id) => (event) => {
    refHeroId.current = id;
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{ width: 350 }}
      className={{ display: "flex", justifyContent: "center" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Hero id={refHeroId.current} />
    </Box>
  );
  return (
    <div className="heroes">
      <div className="header">
        <Typography component="h1">Rick & Morty</Typography>
        <Typography component="p">Welcome to the Rick & Morty page!</Typography>
        <Button onClick={() => getPrevCharacters()} disabled={!prev}>
          Prev
        </Button>
        <Button onClick={() => getNextCharacters()} disabled={!next}>
          Next
        </Button>
        <Typography component="p">Page: {page}</Typography>
      </div>
      {loader ? (
        <div className="loader">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="characters">
          {characters.map((character) => (
            <div
              className="character"
              key={character.id}
              onClick={toggleDrawer(true, character.id)}
            >
              <h2>{character.name}</h2>
              <img src={character.image} alt={character.name} />
              <p>{character.status}</p>
            </div>
          ))}
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
      )}
    </div>
  );
}
