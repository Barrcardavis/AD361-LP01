// Program requirements:
// Items can be added to the grocery list.
// Items can be deleted from the grocery list.
// The subtotal is calculated without tax.
// The total is calculated with tax.
// A receipt can be printed.

const ITEMS = [
  { name: "paper towels", price: 21.99 },
  { name: "sandwich", price: 8.75 },
  { name: "eggs", price: 6.75 },
  { name: "avocado oil", price: 10.0 },
];

export function addItem(name: string, price: number) {
  const newItem = { name: name, price: price };
  ITEMS.push(newItem);
}

export function deleteItem(name: string) {
  const idx = ITEMS.findIndex((item) => item.name === name);

  if (idx !== -1) {
    ITEMS.splice(idx, 1);
  }

  return ITEMS;
}

export function total() {
  let subtotal = 0;

  for (const item of ITEMS) {
    subtotal += item.price;
  }

  return subtotal;
}

export function tax(taxRate: number) {
  return total() * taxRate;
}

export function printReceipt(taxRate: number) {
  console.log("************************");

  for (const item of ITEMS) {
    console.log(`${item.name}: $${item.price.toFixed(2)}`);
  }

  console.log("************************");

  const subtotal = total();
  const taxAmount = tax(taxRate);
  const grandTotal = subtotal + taxAmount;

  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`Tax: $${taxAmount.toFixed(2)}`);
  console.log(`Total: $${grandTotal.toFixed(2)}`);
}
