import React from 'react'
import {useState} from 'react';
const Content = () => {

     const [count, setCount]=useState(50);
     

     function incrementFunction(){
        setCount(numberCount => numberCount + 1)
     }
     function decrementFunction() {
        setCount(numberCount => numberCount-1)
     }

  return (
    <main>
  <p> Have a Great Day </p>
    <label >Unlike</label>
    <button onClick={decrementFunction}>-</button>
    <span>{count}</span>
    <label >Like</label>
    <button onClick={incrementFunction}>+</button>
    </main>
  
  )
}
export default Content