import React from "react";
import "../styles/pages/App.css";

import {ENGButton, ENGTable} from "../components/atoms";

function App() {
  const buttonHandler = () => {
    console.log("le picaron ");
  };
  return (
    <div className="App">
      <ENGButton variant="contained" onClick={buttonHandler}></ENGButton>
      <ENGTable               
        columns = {[
          { 
            field: 'checkbox', 
            headerName: '', 
            width: 70 
          },
          { 
            field: 'number', 
            headerName: 'Number', 
            width: 140 
          },
          { 
            field: 'name', 
            headerName: 'Name', 
            width: 210 
          },
          { 
            field: 'height', 
            headerName: 'Height', 
            width: 140 
          },
          { 
            field: 'mass', 
            headerName: 'Mass', 
            width: 140 
          },
          { 
            field: 'birthYear', 
            headerName: 'Birth Year', 
            width: 140 
          },          
          { 
            field: 'gender', 
            headerName: 'Gender', 
            width: 140 
          }
        ]}
        rows = {
          [
            { 
              checkbox: true, 
              number: 1, 
              name: "Andres", 
              height: 173, 
              mass: 65, 
              birthYear: 1996, 
              gender: "Male"  
            },
            { 
              checkbox: true, 
              number: 2, name: 'Snow', 
              height: 100, 
              mass: 35, 
              birthYear: 1548, 
              gender: "Female" 
            },
            { 
              checkbox: true, 
              number: 3, 
              name: 'Lannister', 
              height: 120, 
              mass: 42, 
              birthYear: 5485, 
              gender: "Male" 
            },
            { 
              checkbox: true, 
              number: 4, 
              name: 'Lannister', 
              height: 100, 
              mass: 45, 
              birthYear: 4586, 
              gender: "Female" 
            }            
          ]
        }    
      />             
      </div>
  );
}

export default App;
