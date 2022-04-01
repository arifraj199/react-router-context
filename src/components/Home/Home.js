import React, { useState } from "react";
import useTShirts from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import TShirts from "../TShirts/TShirts";
import "./Home.css";

const Home = () => {
  const [tShirts, settShirts] = useTShirts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = selectedItem => {
    const exists = cart.find(item => item._id === selectedItem._id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("product already exists");
    }
  };

  const handleRemoveFromCart = selectedItem => {
    const rest = cart.filter(removeItem => removeItem._id !== selectedItem._id);
    setCart(rest);
  };

  return (
    <div className="products-container">
      <div className="tShirt-container">
        {tShirts.map(tShirt =>
          <TShirts
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          />
        )}
      </div>
      <div className="cart-container">
        <Cart
          key={cart._id}
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </div>
    </div>
  );
};

export default Home;
