import React from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <>
      <section className="home-total">
        <h2 style={hpTitle}>Charecters from Harry Potter Film</h2>
         <SearchBar />
        <div className="home-wrapper">
          <Card />
        </div>
      </section>
    </>
  );
};

const hpTitle = {
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: "3rem",
  color: "#fff",
  textAlign: "center",
  margin: "0 auto",
  padding: "1rem 0",
  background: "#000",
  width: "100%",
  borderRadius: "5px",
  boxShadow: "0 0 10px #000",
};
export default Home;
