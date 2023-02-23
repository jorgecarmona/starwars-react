import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import "../../styles/eng-table.css"

interface column {
  field: string;
  headerName: string; 
  width: number;
}

interface table {
  columns: column[];
  rows: object[];
}

function ENGTable(props: table) {   
  function populateCell(row: any, column: any, index: number) {    
    let cell;
    if (column.field === "checkbox" && row[column.field]){
      cell =
      <TableCell 
        key={column.field+"-"+index} 
        width={column.width}
      >
        <input type="checkbox"></input>
      </TableCell>
    }
    else {
      cell = 
      <TableCell 
        key={column.field+"-"+index}
        width={column.width}
      >
        {row[column.field]}
      </TableCell>
    }
    return cell;
  }
  
  return (
    <div className='table-container'>
      <Table className='table'>
        <TableHead>          
          <TableRow className='row'>
            {
              props.columns.map((column: any) => (                
                <th 
                  key={column.field} 
                  style={{width:column.width}}
                >
                  {column.headerName}
                </th>          
              ))
            }
          </TableRow>        
        </TableHead>       
        <TableBody className="rows-container">
          {
            props.rows.map((row: any, index: number) => (
              <TableRow className='row' key={"row-"+index}>
                {
                  props.columns.map((column: any) => (
                    populateCell(row, column, index)                 
                  ))                  
                }
              </TableRow>
            ))
          }        
        </TableBody>         
      </Table>
    </div>
  )
}

export default ENGTable