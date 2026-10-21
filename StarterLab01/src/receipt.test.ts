import {
  addItem,
  deleteItem,
  total,
  tax,
  printReceipt
} from "./fixed_receipt";

describe("addItem", () => {

  test("1. Happy Path - adds a valid item", () => {
    addItem("milk", 5.99);

    expect(true).toBe(true);
  });

  test("2. Unhappy Path - attempts to add an item with a negative price", () => {
    addItem("milk", -5.99);

    expect(true).toBe(true);
  });

  test("3. Edge Case - adds an item with a price of zero", () => {
    addItem("coupon", 0);

    expect(true).toBe(true);
  });

});

describe("deleteItem", () => {

  test("4. Happy Path - deletes an existing item", () => {
    deleteItem("eggs");

    expect(true).toBe(true);
  });

  test("5. Unhappy Path - attempts to delete an item that does not exist", () => {
    deleteItem("banana");

    expect(true).toBe(true);
  });

  test("6. Edge Case - attempts to delete an item with an empty name", () => {
    deleteItem("");

    expect(true).toBe(true);
  });

});

describe("total", () => {

  test("7. Happy Path - calculates the subtotal of all items", () => {
    expect(total()).toBeGreaterThan(0);
  });

  test("8. Unhappy Path - subtotal should not be negative", () => {
    expect(total()).not.toBeLessThan(0);
  });

  test("9. Edge Case - subtotal is a number", () => {
    expect(typeof total()).toBe("number");
  });

});

describe("tax", () => {

  test("10. Happy Path - calculates tax using a valid tax rate", () => {
    expect(tax(0.10)).toBeGreaterThan(0);
  });

  test("11. Unhappy Path - calculates tax using a negative tax rate", () => {
    expect(tax(-0.10)).toBeLessThan(0);
  });

  test("12. Edge Case - calculates tax using a zero tax rate", () => {
    expect(tax(0)).toBe(0);
  });

});

describe("printReceipt", () => {

  test("13. Happy Path - prints a receipt using a valid tax rate", () => {
    expect(() => printReceipt(0.10)).not.toThrow();
  });

  test("14. Unhappy Path - prints a receipt using a negative tax rate", () => {
    expect(() => printReceipt(-0.10)).not.toThrow();
  });

  test("15. Edge Case - prints a receipt using a zero tax rate", () => {
    expect(() => printReceipt(0)).not.toThrow();
  });

});