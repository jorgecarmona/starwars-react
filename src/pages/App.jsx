import React from "react";
import "../styles/App.css";

import {ENGButton, ENGCheckbox} from "../components/atoms";

function App() {
  const buttonHandler = (nombre) => {
    console.log("le picaron "+ nombre);
  };


  return (
    <div className="App">
      <ENGButton variant="contained" onClick={() => buttonHandler('Juan')}>
        CLICK
      </ENGButton>
      <ENGCheckbox checked={true}/>
    </div>
  );
}

export default App;
