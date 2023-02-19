import React from "react";
import "../styles/App.css";

import {ENGButton, ENGSwitch} from "../components/atoms";

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

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
    </div>
  );
}

export default App;
