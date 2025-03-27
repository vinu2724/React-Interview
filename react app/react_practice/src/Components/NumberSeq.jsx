import React, { useState } from "react";

const NumberSeq = ({ num }) => {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % num.length);
  };

  return (
    <div>
      <p>the current number is {num[index]}</p>
      <button onClick={handleClick}>Next Number</button>
    </div>
  );
};

export default NumberSeq;
