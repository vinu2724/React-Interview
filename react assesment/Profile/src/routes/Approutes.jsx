import { Routes, Route } from "react-router-dom";
import Body from "../Components/Body/Body";
import Home from "../Components/Home/Home";
import Profile from "../Components/Profile/Profile";

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
    </Routes>
  );
};

export default Allroutes;
