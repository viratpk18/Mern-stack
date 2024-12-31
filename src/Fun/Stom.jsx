import React, { useContext } from 'react';
import { nameContext } from '../App';

const Stom = () => {
    let name = useContext(nameContext);
    return (
        <div>
            <h2>Stomach = {name}</h2>
        </div>
    );
};

export default Stom;