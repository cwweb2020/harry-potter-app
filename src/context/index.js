import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {v4 as uuidv4} from 'uuid';
import Axios from "axios";

const CharContext = createContext();
export const CharConsumer = () => useContext(CharContext);

const CharProvider = ({ children }) => {
  const localStoreChar = JSON.parse(localStorage.getItem("characters"))
  const [characters, setCharacters] = useState(localStoreChar || []);
  const [singleCharacter, setSingleCharacter] = useState(null);
  const [search,setSearch] = useState("");
  // codigo viejo 
  // estos dos states hacen exactamente lo mismo 
  // const [getLocalFav, setGetLocalFav] = useState(
    //   JSON.parse(localStorage.getItem("favourites")) || []
    // );
    // const [favourite, setFavourite] = useState(getLocalFav);

  // --------- codigo nuevo !! -------------------
  const storageFavourites = JSON.parse(localStorage.getItem("favourite"));
  // si hay algo en localStorage etonces toma del local , si no array vacio
  const [favourite, setFavourite] = useState(storageFavourites || []);

  // Get all characters

  const getCharacters = async () => {
    try {
      const res = await Axios.get("http://hp-api.herokuapp.com/api/characters");
      const allCharacters = res.data.map((char) => {
        return {...char, id:uuidv4()}
      });
      setCharacters(allCharacters);
      localStorage.setItem("characters", JSON.stringify(allCharacters));
    } catch (error) {
      console.log(error);
    }
  };


  const removeFromFavourites = (id) => {
    const newFavouritesArr = favourite.filter((fav) => fav.id !== id)
    setFavourite(newFavouritesArr)
    localStorage.setItem("favourite",JSON.stringify(newFavouritesArr));
  }


  useEffect(() => {
    if(characters.length < 1){
      getCharacters();
    }
  });

  // get single character

  const getCharacter = (id) => {
    //  console.log(id);
    const character = characters.find(
      (c) => c.id === id
    );
    //console.log(character);
    setSingleCharacter(character);
  };

  // -------- NO TE SIRVE ------------------------

  // filter characters
  // const filterCharacters = (character) => {
  //   const filteredCharacters = characters.filter((el) => {
  //     if (character === "" || character === undefined || character === null) {
  //       return el;
  //     } else if (el.name.toLowerCase().includes(character.toLowerCase())) {
  //       return el;
  //     }
  //   });
  //   setCharacters(filteredCharacters);
  // };


  // add to favourite
  const addToFavourite = (item) => {
    //codigo viejo 
    // console.log(item);
    // const newFavourite = characters.find((c) => c.name === item);
    // console.log("favorito " + newFavourite);
    // setFavourite([...favourite, newFavourite]);
    // localStorage.setItem("favourite", JSON.stringify(favourite));

    // --- codigo nuevo ----- 
    const newFavorites = [...favourite,item];
    setFavourite(newFavorites);
    localStorage.setItem("favourite", JSON.stringify(newFavorites));
  };

  return (
    <CharContext.Provider
      value={{
        characters,
        singleCharacter,
        favourite,
        search,
        getCharacter,
        addToFavourite,
        setSearch,
        removeFromFavourites
      }}
    >
      {children}
    </CharContext.Provider>
  );
};

export default CharProvider;
