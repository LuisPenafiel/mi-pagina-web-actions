function sayHello(name) {
  return `Hello, ${name}!`;
}

// Exportar para Node.js (pruebas con Jest)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sayHello };
}

// Hacer la función accesible en el navegador
if (typeof window !== 'undefined') {
  window.sayHello = sayHello;
}