import React from "react";
import "../styles/App.css";

<<<<<<< HEAD
import {ENGTable} from "../components/atoms";

function App() {
  return (
    <div className="App">
      <ENGTable 
        /*tableWidth={800} 
        tableAlignment="left" */
        cellAlignment="left"
        cellVerticalAlignment="bottom"
        columnTitles = {[
          "Num",
          <input type={"checkbox"}></input>,
          "Nombre",
          "Edad",
          "Altura"
        ]}
        rowsContent={
          [
            [1,<input type={"checkbox"}></input>,"Andres", 26, 1.73],
            [2, <input type={"checkbox"}></input>, "Jorge"],
            [3, <input type={"checkbox"}></input>, "Juana", 20, 1.70]
          ]
        }    
      >
      </ENGTable>      
=======
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
>>>>>>> a032d7171d78843d6c174327468bd283310745f1
    </div>
  );
}

export default App;
