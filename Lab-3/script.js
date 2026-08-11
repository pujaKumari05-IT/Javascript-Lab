// ==========================================
// PRACTICAL LAB SESSION 3
// Variables, Data Types & Operators
// ==========================================


// ==========================================
// PART 0 - QUICK RECAP
// ==========================================

console.log("PART 0 - QUICK RECAP");

console.log(typeof (10 + "5"));
console.log(5 === "5");

let x = 10;
x += 5;
console.log(x);

console.log(true && false || true);

console.log(10 % 3);


// ==========================================
// PART 1 - OPERATOR PRECEDENCE
// ==========================================

console.log("PART 1 - OPERATOR PRECEDENCE");

let val = 4 + 3 * 2 ** 2 - 6 / 3;

console.log("Value:", val);


// Task 1.2

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);


// Task 1.3

let expression = (10 + 5 > 12) && (20 - 5 === 15);

console.log("Task 1.3:", expression);


// ==========================================
// PART 2 - NESTED TERNARY
// ==========================================

console.log("PART 2 - NESTED TERNARY");


// Task 2.1 - Movie Ticket

let age = 20;

let ticketPrice =
    age < 5 ? "Free" :
    age < 12 ? "₹100" :
    age < 60 ? "₹250" :
    "₹150";

console.log("Ticket Price:", ticketPrice);


// Task 2.2 - Shipping

let cartTotal = 1500;

let shippingCost =
    cartTotal >= 2000 ? "Free Shipping" :
    cartTotal >= 1000 ? "₹50" :
    "₹100";

console.log("Shipping:", shippingCost);


// Task 2.3 - Discount Type

let isMember = true;
let totalSpent = 6000;

let discountType =
    (isMember && totalSpent >= 5000) ? "VIP Discount" :
    totalSpent >= 5000 ? "Regular Discount" :
    "No Discount";

console.log("Discount Type:", discountType);


// ==========================================
// PART 3 - ARRAYS AND OBJECTS
// ==========================================

console.log("PART 3 - ARRAYS AND OBJECTS");


// Task 3.1 - Exam Scores

const scores = [70, 80, 60, 50, 90];

const scoreTotal =
    scores[0] +
    scores[1] +
    scores[2] +
    scores[3] +
    scores[4];

const average = scoreTotal / scores.length;

const result = average >= 40 ? "Pass" : "Fail";

console.log("Total:", scoreTotal);
console.log("Average:", average);
console.log("Result:", result);


// Task 3.2 - Objects

const item1 = {
    name: "Notebook",
    price: 60,
    qty: 3
};

const item2 = {
    name: "Pen",
    price: 10,
    qty: 5
};

const item3 = {
    name: "Bag",
    price: 800,
    qty: 1
};

const item4 = {
    name: "Pencil",
    price: 20,
    qty: 4
};

const subtotal1 = item1.price * item1.qty;
const subtotal2 = item2.price * item2.qty;
const subtotal3 = item3.price * item3.qty;
const subtotal4 = item4.price * item4.qty;

const grandTotal =
    subtotal1 +
    subtotal2 +
    subtotal3 +
    subtotal4;

console.log("Grand Total:", grandTotal);


// ==========================================
// PART 4 - TYPE COERCION
// ==========================================

console.log("PART 4 - TYPE COERCION");

console.log("5" + 3);
console.log("5" - 3);
console.log("abc" * 2);
console.log(NaN === NaN);
console.log([] == false);
console.log("10" == 10);
console.log(null + 1);

console.log("typeof NaN:", typeof NaN);


// ==========================================
// PART 5 - SMART SHOPPING CART
// ==========================================

console.log("==========================================");
console.log("PART 5 - SMART SHOPPING CART");
console.log("==========================================");


const product1 = {
    name: "Notebook",
    price: 60,
    qty: 3
};

const product2 = {
    name: "Pen",
    price: 10,
    qty: 5
};

const product3 = {
    name: "Bag",
    price: 800,
    qty: 1
};


// Check prices are Numbers

console.log("Product 1 price type:", typeof product1.price);
console.log("Product 2 price type:", typeof product2.price);
console.log("Product 3 price type:", typeof product3.price);


// Calculate subtotals

const productSubtotal1 = product1.price * product1.qty;
const productSubtotal2 = product2.price * product2.qty;
const productSubtotal3 = product3.price * product3.qty;


// Calculate grand total

const shoppingTotal =
    productSubtotal1 +
    productSubtotal2 +
    productSubtotal3;


// Tiered discount

const discountPercentage =
    shoppingTotal >= 5000 ? 20 :
    shoppingTotal >= 2000 ? 10 :
    shoppingTotal >= 1000 ? 5 :
    0;


// Discount amount

const discountAmount =
    shoppingTotal * discountPercentage / 100;


// Amount after discount

const amountAfterDiscount =
    shoppingTotal - discountAmount;


// GST

const gst =
    amountAfterDiscount * 18 / 100;


// Final payable amount

const finalAmount =
    amountAfterDiscount + gst;


// Free shipping

const freeShipping =
    (amountAfterDiscount >= 1500) || (3 >= 3);


// Shipping status

const shippingStatus =
    freeShipping ? "FREE" : "₹100 shipping charge";


// Print receipt

console.log("----------- RECEIPT -----------");

console.log(product1.name + " - ₹" + productSubtotal1);
console.log(product2.name + " - ₹" + productSubtotal2);
console.log(product3.name + " - ₹" + productSubtotal3);

console.log("Grand Total: ₹" + shoppingTotal);

console.log("Discount: " + discountPercentage + "%");
console.log("Discount Amount: ₹" + discountAmount);

console.log("After Discount: ₹" + amountAfterDiscount);

console.log("GST (18%): ₹" + gst);

console.log("Final Payable: ₹" + finalAmount);

console.log("Shipping: " + shippingStatus);

console.log("-------------------------------");


// Bonus

const loyaltyPoints = finalAmount / 100;

console.log("Loyalty Points:", loyaltyPoints);


// ==========================================
// PART 6 - DEBUGGING
// ==========================================

console.log("PART 6 - DEBUGGING");


// Snippet 1 - Corrected

let price = 500;
const discount = price * 0.1;
let finalDiscount = discount + 5;

console.log("Final:", finalDiscount);


// Snippet 2 - Corrected

let marks = "85";
let result2 = marks === "85" ? "Pass" : "Fail";

console.log(result2);


// Snippet 3 - Corrected

let cartTotal2 = 1200;
cartTotal2 = cartTotal2 - 100;

let shipping =
    cartTotal2 >= 1500 ? "Free" : "Paid";

console.log(shipping);