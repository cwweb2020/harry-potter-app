import React from 'react'
import { CharConsumer } from '../context'

const Favourites = () => {
   const {favourite,removeFromFavourites} = CharConsumer()
   console.log("desde favourites " + favourite);


    return (
        <>
            <section className='fav-total'>
            <h1 className='text-center fs-3'>Favourites</h1>
                <div className="container">
                    <div className="fav-wrapper">
                    {
                        favourite.length > 0 && favourite.map((item, index) => (
                            <div className="fav-card-container mb-4" key={index}>
                            <div className="fav-pic">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="fav-content">
                                <h3>{item.name}</h3>
                                <button onClick={() => removeFromFavourites(item.id)} className='btn btn-danger'>Remove</button>
                            </div>
                        </div>
                        ))
                    }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Favourites
