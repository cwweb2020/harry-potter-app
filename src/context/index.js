import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import Axios from "axios";

const CharContext = createContext();
export const CharConsumer = () => useContext(CharContext);

const CharProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [singleCharacter, setSingleCharacter] = useState({});
  const [getLocalFav, setGetLocalFav] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );
  const [favourite, setFavourite] = useState(getLocalFav);

  // Get all characters

  const getCharacters = async () => {
    try {
      const res = await Axios.get("http://hp-api.herokuapp.com/api/characters");
      const allCharacters = res.data;
      setCharacters(allCharacters);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  // get single character

  const getCharacter = (id) => {
    //  console.log(id);
    const character = characters.filter(
      (c) => c.name.split(" ").join("-") === id
    );
    console.log(character);
    setSingleCharacter(character[0]);
  };

  // filter characters

  const filterCharacters = (character) => {
    const filteredCharacters = characters.filter((el) => {
      if (character === "" || character === undefined || character === null) {
        return el;
      } else if (el.name.toLowerCase().includes(character.toLowerCase())) {
        return el;
      }
    });
    setCharacters(filteredCharacters);
  };

  // add to favourite

  const addToFavourite = (item) => {
    console.log(item);

    const newFavourite = characters.find((c) => c.name === item);

    console.log("favorito " + newFavourite);
    setFavourite([...favourite, newFavourite]);

    localStorage.setItem("favourite", JSON.stringify(favourite));
  };

  return (
    <CharContext.Provider
      value={{
        characters,
        getCharacter,
        singleCharacter,
        filterCharacters,
        addToFavourite,
        favourite,
      }}
    >
      {children}
    </CharContext.Provider>
  );
};

export default CharProvider;
