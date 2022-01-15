import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CharConsumer } from '../context';
import ScrollToTop from "react-scroll-to-top";
import { AiOutlineHeart } from 'react-icons/ai';
import {chekIfIsInFavourites} from "../helper/alfred"


const Description = () => {

    const {id} = useParams()
    // const {getCharacter, singleCharacter, addToFavourite,favourite} = CharConsumer()
    const {addToFavourite,favourite,getCharacter,singleCharacter} = CharConsumer()

   // console.log(singleCharacter);
    // const sendCharacter = (id) => {
    
    //     getCharacter(id);
    // }

    // useEffect(() => {
    //     sendCharacter(id);
    //      // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [id]);

    useEffect(() => {
      getCharacter(id)
    })

    useEffect(() => {
     
    }, [favourite])

    // handle favourite
    const handleFavourite = (item) => {
         addToFavourite(item);
         // no hace falta , resuleve mi ayudante ("Helper")
        //  setRedHeart(true)
    }

    return (
        <>
         {!singleCharacter ? <h1>Cargando</h1> : (
          <section className='desc-total'>
          <h2 className='text-center text-capitalize my-5 pb-4'>{singleCharacter.name}</h2>
            <div className="desc-wrapper">
              <div className="desc-pic-container">
                  <img src={`${singleCharacter.image ? singleCharacter.image : 'https://i.ibb.co/vPMxFqp/harry.jpg'}`} alt={singleCharacter.name} />
              </div>
              <div className="desc-info-container">
                  <p>This is <b> {singleCharacter.name}</b>, {singleCharacter.gender === "female" ? "she" : "he"} belongs to {singleCharacter.house}´s house,</p>
                  <p>{singleCharacter.gender === "female" ? "she" : "he"} is a {singleCharacter.species}. {singleCharacter.gender === "female" ? "Her" : "His"} eyes are {singleCharacter.eyeColour}, and {singleCharacter.gender === "female" ? "Her" : "His"} hair is {singleCharacter.hairColour}. {singleCharacter.name} was born in {singleCharacter.dateOfBirth}.</p>
                  <p>{singleCharacter.gender === "female" ? "Her" : "His"} ancestry is {singleCharacter.ancestry ? singleCharacter.ancestry : "unknown"}.</p>
                  <p>{singleCharacter.gender === "female" ? "She" : "He"} has a patronus and it`s {singleCharacter.patronus ? singleCharacter.patronus : "unknown" }.</p>
                  <p>{singleCharacter.gender === "female" ? "She" : "He"}  {singleCharacter.hogwartsStudent ? "is" : "is not"} a Hogwart student.</p> 
                  <p>The {singleCharacter.gender === "female" ? "actriss" : "actor"} who plays this role is {singleCharacter.actor}.</p>
                 
                 <span>
                    <AiOutlineHeart
                       onClick={()=> handleFavourite(singleCharacter)}
                        className={chekIfIsInFavourites(favourite,singleCharacter) ? 'svg-active' : ''}
                     />
                 </span>
              </div>
              
            </div>
            <ScrollToTop smooth />
        </section>
         )}

        </>
    )
}



export default Description
