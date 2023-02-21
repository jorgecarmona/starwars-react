import React from "react";
import logo from "../assets/logo.svg";
import "../styles/App.css";

import {Button} from "@mui/material";

function App() {
  const buttonHandler = () => {
    console.log("le picaron");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <h4>Test of MUI library</h4>
        <Button color="secondary" onClick={buttonHandler} variant="contained">
          Contained
        </Button>
      </header>
    </div>
  );
}

export default App;
