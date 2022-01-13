import {  useContext, useEffect, useState } from "react"
import { createContext } from "react"
import Axios from "axios";

const CharContext = createContext()
export const CharConsumer = () => useContext(CharContext)

const CharProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [singleCharacter, setSingleCharacter] = useState({});
  
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

    // single character
    const getCharacter = (id) => {
     //  console.log(id);
      const character = characters.filter(c => c.name.split(' ').join('-') === id);
        console.log(character);
      setSingleCharacter(character[0]);
      
    }



    return (
        <CharContext.Provider value={{ characters, getCharacter, singleCharacter }}>
            { children }
        </CharContext.Provider>
    )
}

export default CharProvider
