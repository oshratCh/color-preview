import React, { useState } from "react";

import ColorInput from "../components/ColorInput";
import ColorPreview from "../components/ColorPreview";

import "./HomePage.css";

export default function HomePage() {
  const [color, setColor] = useState("");

  function onColorChanged(newColor) {
    setColor(newColor);
  }

  return (
    <div className="home-page">
      <ColorInput colorChange={onColorChanged} />
      <ColorPreview color={color} />
    </div>
  );
}
