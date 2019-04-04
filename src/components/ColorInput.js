import React, { useState } from "react";

import "./ColorInput.css";

const COLOR_REGEX = /^#[0-9A-Fa-f]{0,6}$/;

export default function ColorInput(props) {
  const [color, setColor] = useState("#");

  function handleColorInput(event) {
    let colorText = event.target.value;
    if (COLOR_REGEX.test(colorText)) {
      setColor(colorText);
      props.colorChange(colorText);
    }
  }

  return (
    <div className="color-input">
      <input
        value={color}
        onChange={handleColorInput}
        data-testid="colorInput"
      />
    </div>
  );
}
