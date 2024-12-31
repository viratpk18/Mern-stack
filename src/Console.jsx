import React, { useState } from 'react';

function Console() {
    let [count, setCount] = useState('praveen');
    let name = () => {
        console.log(count);
    }
    return (
        <div>
            <h1>Name is:{count}</h1>
            <input type="text" value={count} onChange={(e)=> setCount(e.target.value)} />
            <button onClick={name}>Click to print in console</button>
        </div>
    );
}

export default Console;