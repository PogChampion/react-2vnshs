import React, { Component } from 'react';

 const OperationTile = ({operationSign, operationPassed}) => {
  return (
    <a class="tile operationTile" onClick={(e) => {operationPassed(operationSign)}}>
      <div className="">
       {operationSign}
      </div>
    </a>
    
  )
}

export default OperationTile
