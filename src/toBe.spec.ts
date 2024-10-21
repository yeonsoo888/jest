import {sum} from "./toBe";

test('sum 함수는 두 숫자를 더해야 한다',() => {
  expect(sum(2, 5)).toBe(7);
  expect(sum(2, 5)).not.toBe(4);
})
