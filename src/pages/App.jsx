import React from "react";
import "../styles/App.css";

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
    </div>
  );
}

export default App;
