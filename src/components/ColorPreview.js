import React from "react";

import "./ColorPreview.css";

export default function ColorPreview(props) {
  return (
    <div className="color-preview" style={{ backgroundColor: props.color }}>
      {props.color}
    </div>
  );
}
