import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
