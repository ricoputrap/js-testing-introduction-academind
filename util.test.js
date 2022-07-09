const { generateText, checkAndGenerate } = require('./util');

// unit test 1
test('should output name and age with a correct format', () => { 
  const text = generateText("Rico", 24);
  expect(text).toBe("Rico (24 years old)");

  const text2 = generateText("Amma", 25);
  expect(text2).toBe("Amma (25 years old)");
});

// unit test 2
test('should output data-less text', () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});

// integration test -- Other functions are being called in checkAndGenerate()
test('should generate a valid text output', () => {
  const text = checkAndGenerate("Rico", 24);
  expect(text).toBe("Rico (24 years old)");
})