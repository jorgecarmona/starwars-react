import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import "../../styles/components/atoms/eng-table.css"

interface column {
  field: string;
  headerName?: string; 
  width?: number;
}

type Table = {
  columns: column[];
  rows: object[];
}

function ENGTable(props: Table) {   
  function populateCell(row: any, column: column, index: number) {    
    let cell;
    if (column.field === "checkbox" && row.checkbox) {
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
      <Table>
        <TableHead>          
          <TableRow className='row' key='row-head'>
            {
              props.columns?.map((column: column) => (                
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
        <TableBody>
          {
            props.rows?.map((row: any, index: number) => (
              <TableRow className='row' key={"row-"+index}>
                {
                  props.columns?.map((column: column) => (
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