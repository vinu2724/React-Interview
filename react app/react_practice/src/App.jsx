import { useState } from "react";
import "./App.css";
import PropPract from "./Components/PropPract.jsx";
import NumberSeq from "./Components/NumberSeq.jsx";
import PrimeNumber from "./Components/PrimeNumber.jsx";
import ControlledForm from "./Components/ControlledForm.jsx";
import Todo from "./Components/Todo.jsx";
import ProductDisplay from "./Components/ProductDisplay.jsx";
import Accordion from "./Components/Accordian.jsx";

const App = () => {
  const [count, setCount] = useState(0);

  const handleclick = (value) => {
    if (value === "inc") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  const nameArray = [
    { name: "vinayak" },
    { name: "chaitu" },
    { name: "chetan" },
    { name: "vaibhav" },
    { name: "Ashwini" },
    { name: "suresh" },
  ];

  const productList = [
    { id: 1, name: "iphone 16", price: "$1000" },
    { id: 2, name: "iphone 16", price: "$1000" },
    { id: 3, name: "iphone 16", price: "$1000" },
    { id: 4, name: "iphone 16", price: "$1000" },
    { id: 5, name: "iphone 16", price: "$1000" },
  ];

  return (
    <div className="outer">
      {/* <div className="first">
        <h1>hello world!</h1>
        <p>count : {count}</p>
        <button onClick={() => handleclick("inc")}>Increase</button>
        <button onClick={() => handleclick("dec")}>Decrease</button>
      </div>

      <PropPract names={nameArray} />
      <PrimeNumber num={13} />
      <NumberSeq num={[12, 23, 34, 45, 32, 435, 23, 56]} /> */}
      {/* <ControlledForm /> */}

      {/* <Todo /> */}
      {/* <ProductDisplay list={productList} /> */}
      <Accordion />
    </div>
  );
};

export default App;
