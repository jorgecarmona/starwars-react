import React from "react";
import "../styles/App.css";

import {ENGButton, ENGSwitch, ENGCheckbox} from "../components/atoms";

function App() {
  const buttonHandler = (nombre) => {
    console.log("le picaron "+ nombre);
  };

  return (
    <div className="App">
      <ENGButton variant="contained" onClick={() => buttonHandler('Juan')}>
        CLICK
      </ENGButton>
      <ENGSwitch checked={true} color="error"/> 
      <ENGCheckbox checked={true}/>
    </div>
  );
}

export default App;
