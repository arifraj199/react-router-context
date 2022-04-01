import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Sister = ({house}) => {
    const phone = useContext(RingContext);
    return (
        <div>
            <h2>This is Sister</h2>
            <h3>House:{house}</h3>
            <h3>Phone: {phone}</h3>
        </div>
    );
};

export default Sister;