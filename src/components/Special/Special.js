import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h2>gift: {house}</h2>
            <button onClick={()=> setHouse(house + 1)}>Add house</button>
        </div>
    );
};

export default Special;