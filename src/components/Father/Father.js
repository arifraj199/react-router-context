import React from "react";
import Myself from "../Myself/Myself";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";
import './Father.css'

const Father = ({ house }) => {
  return (
    <div>
      <h2>This is father</h2>
      <h3>
        House:{house}
      </h3>
      <div className="father-child">
        <Myself house={house} />
        <Brother house={house} />
        <Sister house={house} />
      </div>
    </div>
  );
};

export default Father;
