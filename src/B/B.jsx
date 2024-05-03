"use client";
import React, { useState } from "react";

import "./B.css";

const B = () => {
  const [location, setLocation] = useState();
  const handleChange = (eve) => {
    setLocation(eve.target.value);
  };
  const handleClick = () => {
    alert(location);
  };
  return (
    <div>
      <h1>B</h1>
      <p>
        Location: <input onChange={handleChange} />
      </p>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default B;
