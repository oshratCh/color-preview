import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, getByTestId } from "react-testing-library";

import ColorInput from "./ColorInput";

it("renders without crashing", () => {
  const { container, rerender } = render(<ColorInput />);
  const countValue = getByTestId(container, "colorInput");
  fireEvent.change(countValue, { target: { value: "1" } });
  expect(countValue.textContent).toBe("#1");
});
