const puppeteer = require('puppeteer');
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
});

test('should click around', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"]
  });

  const page = await browser.newPage();
  await page.goto(
    "file:///Users/ricoputrapradana/LEARN/testing/js-testing-introduction-academind/index.html"
  );

  await page.click("input#name");
  await page.type("input#name", "Rico");

  await page.click("input#age");
  await page.type("input#age", '24');

  await page.click("#btnAddUser");

})