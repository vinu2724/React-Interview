import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Body from "./Components/Body/Body";
import { BrowserRouter as Router } from "react-router-dom";
import Approutes from "./routes/Approutes";

const App = () => {
  return (
    <Router>
      {/* <Navbar/> */}
      <Approutes />
    </Router>
  );
};

export default App;
