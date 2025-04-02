import React from "react";

const ProductDisplay = ({ list }) => {
  return (
    <div style={{ maxWidth: "300px", margin: "auto", textAlign: "center" }}>
      <h1>Product List</h1>
      <ul style={{ padding: " 0" }}>
        {list.map((item) => (
          <li key={item.id} style={{ listStyle: "none", marginBlock: "10px" }}>
            <span>Item : {item.name}</span>
            <span>Price : {item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDisplay;
