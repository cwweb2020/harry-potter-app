import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({reloadPage}) => {
  return (
    <>
      <section className="nav">
       <div className="navwrapper">
       <Link to="/">
             Home
          </Link>
          <Link to="favourites">
             Favourites
          </Link>

       </div>
        
      </section>
    </>
  );
};

export default Navbar;