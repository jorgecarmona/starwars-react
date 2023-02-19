import React from "react";

import { ENGButton } from "../components/atoms";

function App() {
  const buttonHandler = () => {
    console.log("le picaron");
  };

  return (
    <div className="App">
        <ENGButton color="secondary" onClick={buttonHandler} variant="contained" >
          Contained
        </ENGButton>
       
    </div>
  );
}


export default App;
