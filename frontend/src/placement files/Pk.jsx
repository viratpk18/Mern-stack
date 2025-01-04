import React, {useState} from 'react';
import './index.css';

function Pk(){
    let[count,setcount] = useState(0);
    let[name,setname] = useState('Praveen');
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    const add = () => {
        setSum(num1 + num2);
    };

    return(
        <div>
            <fieldset>
            <legend>sample</legend>
            <h1>Count: {count}</h1>
            <button onClick={() => setcount(count + 1)}>Increment</button>
            <button onClick={() => setcount(count - 1)}>Decrement</button>
            <h1>{name}</h1>
            <input type="text" onChange={(e) => setname(e.target.value)} placeholder="Enter new name" />
            <input type="text" value={num1} onChange={(e) => setNum1(Number(e.target.value))} placeholder="Enter 1st number" />
            <input type="text" value={num2} onChange={(e) => setNum2(Number(e.target.value))} placeholder="Enter 2nd number" />
            <button onClick={add}>Add</button>
            <h2>Sum: {sum}</h2>
            </fieldset>
        </div>
    )
}
export default Pk;