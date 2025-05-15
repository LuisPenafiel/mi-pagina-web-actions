function sayHello(name) {
  return `Hello, ${name}!`;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sayHello };
}

if (typeof window !== 'undefined') {
  window.sayHello = sayHello;
}