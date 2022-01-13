import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CharConsumer } from '../context';
import ScrollToTop from "react-scroll-to-top";


const Description = () => {
    const {id} = useParams()
    const {getCharacter, singleCharacter} = CharConsumer()
    console.log(singleCharacter);
    const sendCharacter = (id) => {
        
        getCharacter(id);
    }

    useEffect(() => {
        sendCharacter(id);
    }, [id]);

    return (
        <>
          <section className='desc-total'>
            <h2 className='text-center text-capitalize my-5 pb-4'>{singleCharacter.name}</h2>
              <div className="desc-wrapper">
                <div className="desc-pic-container">
                    <img src={singleCharacter.image} alt={singleCharacter.name} />
                </div>
                <div className="desc-info-container">
                    <p>This is <b> {singleCharacter.name}</b>, {singleCharacter.gender === "female" ? "she" : "he"} belongs to {singleCharacter.house}´s house,</p>
                    <p>{singleCharacter.gender === "female" ? "she" : "he"} is a {singleCharacter.species}. {singleCharacter.gender === "female" ? "Her" : "His"} eyes are {singleCharacter.eyeColour}, and {singleCharacter.gender === "female" ? "Her" : "His"} hair is {singleCharacter.hairColour}. {singleCharacter.name} was born in {singleCharacter.yearOfBirth}.</p>
                    <p>{singleCharacter.gender === "female" ? "Her" : "His"} ancestry is {singleCharacter.ancestry ? singleCharacter.ancestry : "unknown"}.</p>
                    <p>{singleCharacter.gender === "female" ? "She" : "He"} has a patronus and it`s {singleCharacter.patronus ? singleCharacter.patronus : "unknown" }.</p>
                    <p>{singleCharacter.gender === "female" ? "Her" : "His"} wand is {singleCharacter.wand.wood} and it comes from {singleCharacter.wand.core}.</p>
                    <p>The {singleCharacter.gender === "female" ? "actriss" : "actor"} who plays this role is {singleCharacter.actor}.</p>
                   
                   <ScrollToTop smooth />
                </div>
                
              </div>
             
          </section>
        </>
    )
}

export default Description
