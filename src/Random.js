import React from 'react'
import{useState} from 'react';

const Random = ()=> {
    function handleNameChange() {
        const names=["Dony","Jenifer","Dony Jenifer"];
        const int = Math.floor(Math.random()*3)
        SetName(names[int])
    }
    return(
        <main>
            <p>Hii {names}</p>
            <button onClick={handleNameChange()}>Click Me</button>
        </main>
    )
}
export default Random