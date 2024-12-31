import React, { useContext, useState } from 'react';
import { nameContext } from '../App';

const Stom = () => {
    const [color, setColor] = useState('white');
    const [bgcolor, setBgcolor] = useState('black');
    let name = useContext(nameContext);

    const changecolor = () => {
        setBgcolor(bgcolor === 'black' ? 'white' : 'black');
        setColor(color === 'black' ? 'white' : 'black');
    };

    return (
        <>
            <div id="stom" style={{ backgroundColor: bgcolor}}>
                <h2 style={{ color: color }}>Stomach = {name}</h2>
            </div>
            <button id="changeColorButton" onClick={changecolor}>Click to change color</button>
        </>
    );
};

export default Stom;