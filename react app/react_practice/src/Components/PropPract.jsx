import React from "react";

const PropPract = ({ names }) => {
  const filterNames = names
    .filter((item) => item.name.toLowerCase().startsWith("c"))
    .map((item) => item.name)
    .sort();
  return (
    <ul>
      {filterNames.length > 0 ? (
        filterNames.map((name, index) => <li key={index}>{name}</li>)
      ) : (
        <li>no name start with the C found</li>
      )}
    </ul>
  );
};

export default PropPract;
