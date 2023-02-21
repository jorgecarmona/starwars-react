import React from 'react';
import Table from '@mui/material/Table';

import "../../styles/eng-table.css"

function ENGTable(props: any) {   
  function populateCells(row: any, column: any, index: number) {    
    let cell;
    if (column.field === "checkbox" && row[column.field]){
      cell =
      <td key={column.field+"-"+index} width={column.width}>
        <input type="checkbox"></input>
      </td>
    }
    else {
      cell = <td key={column.field+"-"+index} width={column.width}>{row[column.field]}</td>
    }
    return cell;
  }
  
  return (
    <div className='table-container'>
      <Table className='table'>
        <thead>
          <div className='row'>
            {
              props.columns.map((column: any) => (                
                <td key={column.field} width={column.width}>{column.headerName}</td>          
              ))
            }
          </div>        
        </thead>       
        <div className="rows-container">
          {
            props.rows.map((row: any, index: number) => (
              <div className='row'>
                {
                  props.columns.map((column: any) => (
                    populateCells(row, column, index)                 
                  ))                  
                }
              </div>
            ))
          }        
        </div>         
      </Table>
    </div>
  )
}

export default ENGTable