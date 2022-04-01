import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    console.log(cart);
    //conditional rendering ---------->>>

    //method-01
    let command;
    if(cart.length === 0){
        command = <p>Please buy some...</p>
    }else if(cart.length > 0 && cart.length <= 3){
        command = <p>Buy More...</p>
    }else{
        command = <button>Remove All</button>
    }
    //------------>>>>>

    return (
        <div>
            <h2>Selected Item: {cart.length}</h2>
            {
                cart.map(selectItem => <p>
                    {selectItem.name}
                    <button onClick={()=> handleRemoveFromCart(selectItem)}>X</button>
                    </p>)
            }
            {/* method-04 (||[if false]) operator */}
            {cart.length === 0 || <h1>Thanks for buying our product...stay aside</h1>}

            {/* method-03 (&&[if true]) operator */}
            {cart.length === 3 && <button>review item</button>}

            {/* method-02(ternary operator) */}
            {cart.length === 4?<p>You win a coupon</p> : <p>buy product and win coupon</p> }

            {/* method-01 */}
            {command}
        </div>
    );
};

export default Cart;