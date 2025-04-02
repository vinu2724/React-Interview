import React from "react";
import "./Card.css"; // Import CSS
import Data from "../../assets/SampleData/Data";

const CardComponent = () => {
  return (
    <div className="card-container">
      {Data.map((person) => (
        <div key={person.id} className="card">
          <img src={person.Image} alt={person.name} className="card-image" />
          <h3>
            {person.name} {person.sirname}
          </h3>
          <p>
            <strong>Email:</strong> {person.email}
          </p>
          <p>
            <strong>Gender:</strong> {person.gender}
          </p>
          <p>
            <strong>Designation:</strong> {person.Designation}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
