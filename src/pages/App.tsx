import React from "react";
import "../styles/App.css";

import {ENGButton, ENGTypography} from "../components/atoms";

function App() {
  const buttonHandler = () => {
    console.log("le picaron ");
  };

  return (
    <div className="App">
      <ENGButton variant="contained" onClick={buttonHandler}></ENGButton>
      <ENGTypography></ENGTypography>
    </div>
  );
}

export default App;
