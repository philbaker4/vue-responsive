import { basicFunction } from '../index';
test('Basic Function', () => {
  expect(basicFunction('Phil')).toBe('Hello, Phil');
});
