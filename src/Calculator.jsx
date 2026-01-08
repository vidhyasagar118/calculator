import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [value, setValue] = useState("");

  const buttons = [
    "C", "%", "⌫", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "00", "0", ".", "="
  ];

  const handleClick = (btn) => {
    if (btn === "C") {
      setValue("");
    } 
    else if (btn === "⌫") {
      setValue(value.slice(0, -1));
    } 
    else if (btn === "=") {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue("Error");
      }
    } 
    else {
      setValue(value + btn);
    }
  };

  return (
    <div className="calc-wrapper">
      <div className="calc">
        <div className="display">
          {value || "0"}
        </div>

        <div className="btn-grid">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`btn ${btn === "=" ? "equal" : ""}`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
