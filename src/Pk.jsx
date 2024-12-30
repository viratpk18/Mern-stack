import React, {useState} from 'react';
import './index.css';

function Pk(){
    let[count,setcount] = useState(0);
    let[name,setname] = useState('Praveen');
    return(
        <div>
            <legend>
            <h1>Count:{count}</h1>
            <button onClick={()=>setcount(count+1)}>Increment</button>
            <button onClick={()=>setcount(count-1)}>Decrement</button>
            <h1>{name}</h1>
            <input type="text" onChange={(e) => setname(e.target.value)} placeholder="Enter new name" />
            </legend>
        </div>
    )
}
export default Pk;