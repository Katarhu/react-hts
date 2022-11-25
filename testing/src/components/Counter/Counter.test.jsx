import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import renderer from "react-test-renderer";
import { createRenderer } from 'react-test-renderer/shallow';

import { Counter } from "./Counter";
import {CounterButton} from "../CounterButton/CounterButton";

const mockedIncrement = jest.fn();
const mockedDecrement = jest.fn();
const mockedSetCount = jest.fn();

jest.mock(
  "../../hooks/useCounter", () => ({
    useCounter: () => ({
      count: 0,
      increment: mockedIncrement,
      decrement: mockedDecrement,
      setCount: mockedSetCount,
    })
}));

describe('should match snapshot', () => {
  /*test('deep rendering', () => {
    const counter = renderer.create(<Counter/>);

    expect(counter).toMatchSnapshot();
  });*/

  test('shallow rendering', () => {
    const shallowRenderer = createRenderer();
    const counter = shallowRenderer.render(<Counter/>);

    expect(counter).toMatchSnapshot();
  });
});

describe('test elements', () => {
  beforeEach(() => {
    render(<Counter/>);
  });

  test("should call increment", () => {
    fireEvent.click(screen.getByText("+"));

    expect(mockedIncrement).toBeCalledTimes(1);
  });

  test("should call decrement", () => {
    fireEvent.click(screen.getByText("-"));

    expect(mockedDecrement).toBeCalledTimes(1);
  });

  test("input should have default value", () => {
    //const input = screen.getByRole("input");
    const input = screen.getByLabelText("input");

    expect(input).toHaveValue(0); //"0"
  });

  test("should call setCount", () => {
    const input = screen.getByLabelText("input");

    fireEvent.change(input, {
      target: {
        value: "15"
      }
    });

    expect(mockedSetCount).toBeCalledWith(15);
  });
});
