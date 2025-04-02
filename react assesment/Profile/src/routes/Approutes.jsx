import { Routes, Route } from "react-router-dom";
import Body from "../Components/Body/Body";
import Home from "../Components/Home/Home";
import Profile from "../Components/Profile/Profile";
import About from "../Components/AboutUs/About";
import Contact from "../Components/Contact/Contact";

const Allroutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Body>
            <Home />
          </Body>
        }
      ></Route>
      <Route
        path="/Profile"
        element={
          <Body>
            <Profile />
          </Body>
        }
      ></Route>
      <Route
        path="/about"
        element={
          <Body>
            <About />
          </Body>
        }
      ></Route>
      <Route
        path="/contact"
        element={
          <Body>
            <Contact />
          </Body>
        }
      ></Route>
    </Routes>
  );
};

export default Allroutes;
