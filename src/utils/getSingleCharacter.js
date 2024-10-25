export const getSingleCharacter = async (id) => {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    console.log(data)
    return data;
};