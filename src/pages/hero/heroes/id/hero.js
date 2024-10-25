import React, { useEffect, useState } from "react";
import { getSingleCharacter } from "../../../../utils/getSingleCharacter";
import ImageListItem from "@mui/material/ImageListItem";

export default function Hero({ id }) {
  console.log("id", id);
  const [character, setCharacter] = useState();
  useEffect(() => {
    getCharacter();
  }, []);
  const getCharacter = async () => {
    const character = await getSingleCharacter(id);
    setCharacter(character);
  };
  return (
    <div>
      <h1>Hero</h1>
      <ImageListItem key={id}>
        <img src={character?.image} alt={character?.name} loading="lazy"/>
      </ImageListItem>
      <h2>{character?.name}</h2>
    </div>
  );
}
