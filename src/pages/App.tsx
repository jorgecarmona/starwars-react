import React from "react";
import "../styles/App.css";

import {ENGButton, ENGTextfield} from "../components/atoms";

function App() {
  const buttonHandler = () => {
    console.log("le picaron ");
  };

  return (
    <div className="App">
      <ENGTextfield id="standard-basic" label="Standard" variant="standard" />
      <ENGButton variant="contained" onClick={buttonHandler}></ENGButton>
    </div>
  );
}


export default App;
