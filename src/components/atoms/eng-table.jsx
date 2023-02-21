import React from 'react';
import Table from '@mui/material/Table';

import "../../styles/eng-table.css"

function ENGTable(props) {   
  return (
    <div className='table-container'>
    <Table className='table'>
      <thead>
        <row>
          <td>A</td>
          <td>B</td>
          <td>C</td>
          <td>D</td>
        </row>
      </thead>       
      <div className="rows-container">
        <row>
          <td>A1</td>
          <td>B1</td>
          <td>C1</td>
          <td>D1</td>
        </row>
        <row>
          <td>A2</td>
          <td>B2</td>
          <td>C2</td>
          <td>D2</td>
        </row>
        <row>
          <td>A3</td>
          <td>B3</td>
          <td>C3</td>
          <td>D3</td>
        </row>
      </div>         
    </Table>
    </div>
  )
}

export default ENGTable