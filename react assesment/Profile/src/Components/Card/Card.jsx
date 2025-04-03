import React, { useContext, useEffect } from "react";
import "./Card.css"; // Import CSS
import Data from "../../assets/SampleData/Data";
import { SearchContext } from "../../SearchContext/SearchContext";

const CardComponent = () => {
  const { searchTerm } = useContext(SearchContext);
  let filteredData = Data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    console.log(searchTerm);

    filteredData = Data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredData);
  }, [searchTerm]);

  return (
    <div className="card-container">
      {filteredData.map((person) => (
        <div key={person.id} className="card">
          <img src={person.Image} alt={person.name} className="card-image" />
          <div className="cardBody">
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
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
