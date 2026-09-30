import { test, expect } from "@jest/globals";
import { isEven, palindrome, countVowels } from "../src/functions";

// Step 3: Tests for isEven
test("isEven num even", () => {
  expect(isEven(10)).toBe(true);
});

test("isEven num odd", () => {
  expect(isEven(11)).toBe(false);
});

// Step 4: Tests for palindrome
test("palindrome is palindrome", () => {
  expect(palindrome("tacocat")).toBe(true);
});

test("palindrome is not palindrome", () => {
  expect(palindrome("cat")).toBe(false);
});

// Step 5: Tests for countVowels
test("countVowels has vowels", () => {
  expect(countVowels("hello world")).toBe(300);
});

test("countVowels has no vowels", () => {
  expect(countVowels("myths")).toBe(0);
});
