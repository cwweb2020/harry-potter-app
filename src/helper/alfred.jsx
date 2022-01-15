export  function chekIfIsInFavourites (fav,char)  {

    // fav es es array de favoritos que tengo que pasar el
    // char  => es el singleCharacter // es un objeto 

    // arraydeResupesta.every((res) => res === si )
    
    return fav.some((f) => f.id === char.id); 

}