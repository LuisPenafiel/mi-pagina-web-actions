const { sayHello } = require('../web/script');

test('sayHello should return a greeting with the given name', () => {
  expect(sayHello('Luis')).toBe('Hello, Luis!');
});