import React from 'react';
import Half from './Half';

const Egg = ({name}) => {
    return (
        <div>
            <h2>Egg</h2>
            <Half name={name}/>
        </div>
    );
};

export default Egg;