import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Body from "./Components/Body/Body";
import { BrowserRouter as Router } from "react-router-dom";
import Approutes from "./routes/Approutes";
import { SearchProvider } from "./SearchContext/SearchContext";

const App = () => {
  const [searchValue, setSearchValue] = useState(0);

  return (
    <SearchProvider>
      <Router>
        <Approutes />
      </Router>
    </SearchProvider>
  );
};

export default App;
