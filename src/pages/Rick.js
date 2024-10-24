import React, { useEffect } from "react";
import { getCharacters } from "../utils/getCharacters";

export default function Rick() {
  const [characters, setCharacters] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const renderPage = React.useRef(0);
  const [loader, setLoader] = React.useState(false);
  const [prev, setPrev] = React.useState(0);
  const [next, setNext] = React.useState(1);
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
  return (
    <div>
      <div className="header">
        <h1>Rick & Morty</h1>
        <p>Welcome to the Rick & Morty page!</p>
        <button onClick={() => getPrevCharacters()} disabled={!prev}>
          Prev
        </button>
        <button onClick={() => getNextCharacters()} disabled={!next}>
          Next
        </button>
        <p>Page: {page}</p>
      </div>
      {loader ? (
        <div className="loader">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="characters">
          {characters.map((character) => (
            <div className="character" key={character.id}>
              <h2>{character.name}</h2>
              <img src={character.image} alt={character.name} />
              <p>{character.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
