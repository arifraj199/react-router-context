import React from 'react';
import Special from '../Special/Special';

const Myself = ({house}) => {
    return (
        <div>
            <h2>This is me</h2>
            <h3>House:{house}</h3>
            <Special></Special>
        </div>
    );
};

export default Myself;