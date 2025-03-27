import React from "react";

const PrimeNumber = ({ num }) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <div>
      <p>
        {" "}
        The given number {num} is{" "}
        {isPrime(num) ? "a prime number" : "Not a prime number"}
      </p>
    </div>
  );
};

export default PrimeNumber;
