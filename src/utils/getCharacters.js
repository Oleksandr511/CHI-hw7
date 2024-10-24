export const getCharacters = async (num) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${num}`
  );
  const data = await response.json();
  const characters = data.results;
  const next = data.info.next;
  const prev = data.info.prev;

  return { characters, prev, next };
};
