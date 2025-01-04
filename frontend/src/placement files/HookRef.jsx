import React, { useState, useRef } from 'react';

function HookRef() {
    let [count, setCount] = useState(0);
    let countref = useRef(0);

    let increment = () => { 
        setCount(count + 1);
        countref.current++;

        console.log("state: ",count);
        console.log("Ref: ",countref.current);
    }
    return (
        <>
            <h1>Count:{count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default HookRef;