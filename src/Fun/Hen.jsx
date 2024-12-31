import React from 'react';
import Egg from './Egg';
import '../App.jsx';

const Hen = ({name}) => {
    return (
        <div>
            <h2>Hen</h2>
            <Egg name={name}/>
        </div>
    );
};

export default Hen;