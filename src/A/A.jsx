"use client";
import React, { useState } from "react";
import "./A.css";

const A = () => {
  const [name, setName] = useState();
  const onChange = (eve) => {
    setName(eve.target.value);
  };
  const handleClick = () => {
    alert(name);
  };
  return (
    <div>
      <h1>A</h1>
      <p>
        Name: <input onChange={onChange} />
      </p>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default A;
