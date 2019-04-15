import React from "react";
import ReactDOM from "react-dom";
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'

import ColorInput from "./ColorInput";

afterEach(cleanup)

const setup = () => {
  const utils = render(<ColorInput colorChange={()=>{}}/>)
  const input = utils.getByTestId('colorInput')
  return {
    input,
    ...utils,
  }
}

test("renders default input", () => {
  const {input} = setup()
  expect(input.value).toBe('#')
});

test("handle valid input", () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: '#23'}})
  expect(input.value).toBe('#23')
});


test("handle invalid input", () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: '#$'}})
  expect(input.value).toBe('#')
});

test("handle valid then invalid input", () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: '#2'}})
  fireEvent.change(input, {target: {value: '#2$'}})
  expect(input.value).toBe('#2')
});
