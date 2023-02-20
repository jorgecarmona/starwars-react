import React from 'react';
import Table from '@mui/material/Table';

import "../../styles/eng-table.css"

function ENGTable(props) {   
  let minWidth = [];

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
        {         
          props.rowsContent.map((rowInfo, index) => (
            <div key={`rowContainer-${index}`} className="row">
              {props.columnTitles.map((a, subindex) => (
                <div key={`row-${index}-${subindex}`} className="cell">
                  <span style={{display:"table-cell", verticalAlign:props.cellVerticalAlignment, textAlign: props.cellAlignment}}>
                    {rowInfo[subindex]? rowInfo[subindex] : "" }
                  </span>
                </div>            
              ))}
            </div>
          ))          
        }
      </div>         
    </Table>
    </div>
  )
}

export default ENGTable