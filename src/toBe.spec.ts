import {sum , obj} from "./toBe";

test('sum 함수는 두 숫자를 더해야 한다',() => {
  expect(sum(2, 5)).toBe(7);
  expect(sum(2, 5)).not.toBe(4);
})

test('obj 함수는 object를 리턴한다. ',() => {
  expect(obj()).toStrictEqual({a: 'hello'});
})


test('sum 함수가 1번 호출됐다. ',() => {
  const sumSpy = jest.fn(sum);
  sumSpy(1,4);
  expect(sumSpy).toHaveBeenCalledTimes(1);
})
