import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";
import Navbar from "./components/Navbar/navbar";
import TourList from "./components/Tourlist/tourlist";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
