import React from "react";
import "../styles/App.css";

import {ENGButton, ENGGrid} from "../components/atoms";

function App() {
  const buttonHandler = () => {
    console.log("le picaron ");
  };

  return (
    <div className="App">
      <ENGButton variant="contained" onClick={buttonHandler}></ENGButton>
      <ENGGrid></ENGGrid>
    </div>
  );
}

export default App;
