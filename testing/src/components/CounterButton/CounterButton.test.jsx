import React from "react";
import renderer from "react-test-renderer";

import { CounterButton } from "./CounterButton";

test('should match snapshot', () => {
  const button = renderer.create(<CounterButton>+</CounterButton>);

  expect(button).toMatchSnapshot();
});
