import React from "react";
import { CharConsumer } from "../context";

const Favourites = () => {
  const { favourite, removeFromFavourites } = CharConsumer();
  console.log("desde favourites " + favourite);

  return (
    <>
      <section className="fav-section">
        <h1 className="text-center fav-title">Favourites</h1>
        <div className="fav-card-wrapper">
          {favourite.length > 0 &&
            favourite.map((item, index) => (
              <div className="fav-card" key={index}>
                <div className="fav-pic">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="fav-content">
                  <h3>{item.name} - {item.house}</h3>
                  <button
                    onClick={() => removeFromFavourites(item.id)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Favourites;
