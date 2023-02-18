import React from "react";
import "../styles/App.css";

import {ENGTable} from "../components/atoms";

function App() {
  return (
    <div className="App">
      <ENGTable 
        tableWidth={500} 
        tableAlignment="center"
        cellAlignment="center"
        cellVerticalAlignment="middle"
        columnTitles = {[
          "Num",
          <input type={"checkbox"}></input>,
          "Nombre",
          "Edad",
          "Altura"
        ]}        
      >

      </ENGTable>
        
      
    </div>
  );
}

export default App;
