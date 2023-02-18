import React from 'react';
import Table from '@mui/material/Table';

import "../../styles/eng-table.css"

function ENGTable(props) {   
    // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];  

  return (
    <div className='table-container' style={{justifyContent:props.tableAlignment}}>
    <Table className='table' sx={{width:props.tableWidth}}>
      <header>
        {
          props.columnTitles.map((title, index) => (
            <div key={`title-${index}`} className="title">
              <span style={{display:"table-cell", verticalAlign:props.cellVerticalAlignment, textAlign: props.cellAlignment}}>
               {title}
              </span>              
            </div>
          ))
        }    
      </header>        
      <div className="rows-container">
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
        <div>e</div>
      </div>         
    </Table>
    </div>
  )
}

export default ENGTable