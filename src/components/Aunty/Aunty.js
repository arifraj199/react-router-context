import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({house}) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h2>This is Aunty</h2>
            <h3>House:{house}</h3>
            <h3>ornaments: {ring}</h3>
        </div>
    );
};

export default Aunty;