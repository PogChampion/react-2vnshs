import React, { Component } from 'react';
import {useState, useEffect} from 'react'

import Display from '../Display/Display'
import FunctionTile from '../FunctionTile/FunctionTile'
import OperationTile from '../OperationTile/OperationTile'
import NumberTile from '../NumberTile/NumberTile'

import {MAX_NUMBERS } from './config'

const Calculator = () => {

  function useAsyncState(initialValue) {
  const [value, setValue] = useState(initialValue);
  const setter = x =>
    new Promise(resolve => {
      setValue(x);
      resolve(x);
    });
  return [value, setter];
}


  const [oldNum, setOldNum] = useState(undefined);
  const [newNum, setNewNum] = useAsyncState("0");
  const [operator, setOperator] = useState(undefined);
  const [isThereADot, setIsThereADot] = useState(false);

  const addNumber = (number) => {
    if(newNum.length > MAX_NUMBERS) {
      {/* dont change the old number if maximum specified is reached */}
      return;
    }
    else if (newNum == "0" && number == ".") {
      setNewNum(newNum + number);
      setIsThereADot(true);
    }
    else if (newNum == "0") {
      setNewNum(number);
    }
    else if (number == ".") {
      setNewNum(newNum + number);
      setIsThereADot(true);
    }
    else {
      setNewNum(newNum + number);
    }
  }

  const clear = () => {
    setNewNum(0);
    setOldNum(undefined);
    setIsThereADot(false);
    setOperator(undefined)
  }

  const convert = () => {
    if(parseFloat(newNum) != 0 && !newNum.startsWith("-")) {
      setNewNum("-" + newNum);
    }
    else if(parseFloat(newNum) != 0) {
      setNewNum(newNum.substring(1))
    }
  }

  const passNumbers = () => {
    setOldNum(newNum);
    setNewNum("0");
    console.log("passed")
  }

  async function calculate(){
    if (operator == "+") {
      var result = (parseFloat(oldNum)+parseFloat(newNum)).toString();
      await setNewNum(result);
    }
}

  const handleOperation = (operationSign) => {
    if (parseFloat(newNum) == 0) {
      {/*Don't do anything if the new number is zero*/}
    }
    else if (oldNum==undefined) {
      setOperator(operationSign);
      passNumbers();
    }
    else if (oldNum != undefined){
      calculate();
      passNumbers();
    }
  }

  return (
    <div id="wrapper">
      <Display newNumber={newNum} oldNumber={oldNum} />

      <FunctionTile functionName="AC" functionPassed={clear}/>
      <FunctionTile functionName="+/-"functionPassed={convert}/>
      <OperationTile operationSign="%" operationPassed={handleOperation}/>
      <OperationTile operationSign="/" operationPassed={handleOperation}/>

      <NumberTile number="1" add={addNumber}/>
      <NumberTile number="2" add={addNumber}/>
      <NumberTile number="3" add={addNumber}/>
      <OperationTile operationSign="X" operationPassed={handleOperation}/>

      <NumberTile number="4" add={addNumber}/>
      <NumberTile number="5" add={addNumber}/>
      <NumberTile number="6" add={addNumber}/>
      <OperationTile operationSign="-" operationPassed={handleOperation}/>

      <NumberTile number="7" add={addNumber}/>
      <NumberTile number="8" add={addNumber}/>
      <NumberTile number="9" add={addNumber}/>
      <OperationTile operationSign="+" operationPassed={handleOperation}/>

      {/* the zero prop is used by css */}
      <NumberTile number="0" zero={true} add={addNumber}/>
      <NumberTile number="." zero={false} add={addNumber} dot={isThereADot}/>
      <OperationTile operationSign="=" operationPassed={calculate}/>
    </div>
  )
}

export default Calculator
