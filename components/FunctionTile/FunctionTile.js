import React, { Component } from 'react';

 const FunctionTile = (props) => {
  return (
    <a className="functionTile tile" onClick={props.functionPassed}>
      <div>
        {props.functionName}
      </div>
    </a>
  )
}

export default FunctionTile
