import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";
const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const addHouse = () => {
    const newHouse = house + 1;
    setHouse(newHouse);
  };
  const phone = 'iphone 13 pro';
  const ring = 'diamond ring';

  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div>
        <h2>This is grandPa</h2>
        <h2>
          House:{house}
        </h2>
        <button onClick={addHouse}>Add House</button>
        <div className="grandpa-child">
          <Father house={house} />
          <Uncle house={house} />
          <Aunty house={house} />
        </div>
      </div>
    </RingContext.Provider>
  );
};

export const RingContext = createContext("ring");
export default Grandpa;
