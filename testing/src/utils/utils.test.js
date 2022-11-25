import { get } from "./get";
import {isEven} from "./isEven";

global.fetch = jest.fn();

describe('get', () => {
  test('get should call fetch with param', () => {
    const url = "https://test.com";
    get(url);

    expect(global.fetch).toBeCalledWith(url);
  });
});

/*test.each`
  num | result
  ${1} | ${false}
  ${2} | ${true}
  ${3} | ${false}
`("should return is number even", ({num, result}) => {
  expect(isEven(num)).toBe(result);
  }
);*/
test.each([
  [1, false],
  [2, true],
  [3, false],
])("should return is number even", (num, result) => {
    expect(isEven(num)).toBe(result);
  }
);
