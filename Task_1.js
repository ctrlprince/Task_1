const readlineSync = require('readline-sync');

// Information for each product
const productA = parseInt(readlineSync.question("Enter the quantity of product A: "));
const wrap_productA = readlineSync.question("Is product A wrapped(y/n): ");
const productB = parseInt(readlineSync.question("Enter the quantity of product B: "));
const wrap_productB = readlineSync.question("Is product B wrapped(y/n): ");
const productC = parseInt(readlineSync.question("Enter the quantity of product C: "));
const wrap_productC = readlineSync.question("Is product C wrapped(y/n): ");

// Calculating subtotals for each product
const subtotal_productA = 20 * productA;
const subtotal_productB = 40 * productB;
const subtotal_productC = 50 * productC;

// Calculating total estimate without discounts and other charges
const subtotal = subtotal_productA + subtotal_productB + subtotal_productC;

// Discounts
const flat_10_discount = subtotal > 200 ? 10 : 0;
const bulk_5_discount = (5 * subtotal) / 100 > Math.max(productA, productB, productC) ? (5 * subtotal) / 100 : 0;
const bulk_10_discount = (10 * subtotal) / 100 > productA + productB + productC ? (10 * subtotal) / 100 : 0;
let tiered_50_discount = 0;

if (productA > 15) {
    tiered_50_discount += 0.5 * subtotal_productA;
}
if (productB > 15) {
    tiered_50_discount += 0.5 * subtotal_productB;
}
if (productC > 15) {
    tiered_50_discount += 0.5 * subtotal_productC;
}

// Determining the maximum discount
const max_discount = Math.max(flat_10_discount, bulk_5_discount, bulk_10_discount, tiered_50_discount);

// Examining the discount category
let discount_category;

if (max_discount === flat_10_discount) {
    discount_category = "flat_10_discount";
} else if (max_discount === bulk_5_discount) {
    discount_category = "bulk_5_discount";
} else if (max_discount === bulk_10_discount) {
    discount_category = "bulk_10_discount";
} else {
    discount_category = "tiered_50_discount";
}

// Calculation of wrapping charges
const wrap_fee = (wrap_productA === "y" ? productA : 0) + (wrap_productB === "y" ? productB : 0) + (wrap_productC === "y" ? productC : 0);

// Delivery charges
const shipping_fee = Math.ceil(productA / 10) * 5 + Math.ceil(productB / 10) * 5 + Math.ceil(productC / 10) * 5;

// Calculation of total fee
const total_fee = subtotal + wrap_fee + shipping_fee - max_discount;

// Displaying the results
console.log(`Product A, Quantity: ${productA}`);
console.log(`Total amount of Product A: ${subtotal_productA}`);
console.log(`Product B, Quantity: ${productB}`);
console.log(`Total amount of Product B: ${subtotal_productB}`);
console.log(`Product C, Quantity: ${productC}`);
console.log(`Total amount of Product C: ${subtotal_productC}`);
console.log(`Sub-Total: ${subtotal}`);


console.log(`Discount applied: ${discount_category}`);
console.log(`Discount amount: ${max_discount}`);

// Displaying wrapping and delivery charges
console.log(`Shipping fee: ${shipping_fee}`);
console.log(`Gift Wrap fee: ${wrap_fee}`);
console.log(`Total fee: ${total_fee}`);
