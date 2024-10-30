import React, { useEffect, useState } from "react";
import { getSingleCharacter } from "../../../../utils/getSingleCharacter";
import ImageListItem from "@mui/material/ImageListItem";
import { useRequest } from "ahooks";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";

export default function Hero() {
  const { id } = useParams();

  const { data, loading, error } = useRequest(() => getSingleCharacter(id));

  if (error) {
    return <Typography variant="h1">Error</Typography>;
  }

  return (
    <Box>
      <Typography color="green" variant="h1">
        Hero
      </Typography>
      {loading ? (
        <h1 style={{ background: "pink" }}>Loading...</h1>
      ) : (
        <Box>
          <ImageListItem key={id}>
            <img src={data?.image} alt={data?.name} loading="lazy" />
          </ImageListItem>
          <Typography variant="h2" color="green">
            {data?.name}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
