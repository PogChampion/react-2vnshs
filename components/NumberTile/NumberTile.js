import React, { Component } from 'react';

function NumberTile({number, zero, add, dot}){
  const isZero = zero ? "zero" : ""; {/*CSS STUFF */}
  const classes = `tile numberTile ${isZero}`;
  return dot ?
   (
    <a className={classes} onClick={(e) => {e.preventDefault()}}>
      <div>
       {number}
      </div>
    </a>
  ) 
  : 
  (
    <a className={classes} onClick={(e) => {add(number)}}>
      <div>
       {number}
      </div>
    </a>
  )

}


export default NumberTile
