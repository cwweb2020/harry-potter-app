import { Link, } from "react-router-dom";
import { CharConsumer } from "../context";


const Card = () => {
  const { characters } = CharConsumer();
  
    
  return (
    <>

      {characters.map((c, index) => (
        <div className="card" key={index}>
          <img
            src={`${c.image ? c.image : "https://i.ibb.co/vPMxFqp/harry.jpg" } `}
            className="card-img-top"
            alt={c.name}
          />
          <div className="card-body">
            <h5 className="card-title mb-5 fs-5">{c.name}</h5>
            <Link to={`description/${c.name.split(' ').join('-')}`}>
              <button className="btn btn-primary w-100">More info</button>
            </Link>
          </div>
          
        </div>
      ))}
    </>
  );
};

export default Card;
