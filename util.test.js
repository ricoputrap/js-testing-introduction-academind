const { generateText } = require('./util');

test('should output name and age with a correct format', () => { 
  const text = generateText("Rico", 24);
  expect(text).toBe("Rico (24 years old)");

  const text2 = generateText("Amma", 25);
  expect(text2).toBe("Amma (25 years old)");
});

test('should output data-less text', () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});