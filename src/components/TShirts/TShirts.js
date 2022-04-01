import React from 'react';
import './TShirts.css'

const TShirts = (props) => {
    const {handleAddToCart,tShirt} = props;
    const {picture,name,price} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <button onClick={()=>handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirts;