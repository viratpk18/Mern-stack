// import Hookref from './HookRef';
import './App.css'
import { createContext, useEffect, useState } from 'react';
// import Console from './Console';
import Hen from './Fun/Hen';
export let nameContext = createContext();

function App() {
    // let[count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log('value updated');
    //     return(() => {
    //         console.log('code cleanup')
    //     })
    // }, [count]);
    
    
  return (
    <>
        {/* <h1>Count:{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <Hookref /> */}
        {/* <Console /> */}
        <fieldset id="fil">
        <legend>Components</legend>
        <nameContext.Provider value="water">
        <Hen />
        </nameContext.Provider> 
        </fieldset> 
    </>
  )
}

export default App
