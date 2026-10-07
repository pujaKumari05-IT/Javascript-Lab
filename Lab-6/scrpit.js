// ============================================================
// JAVASCRIPT LAB 6
// HOISTING & CLOSURES
// ============================================================

console.log("===== JAVASCRIPT LAB 6 =====");


// ============================================================
// PART 1 — HOISTING WITH var
// ============================================================

// Task 1.1
console.log("\n--- Task 1.1 ---");

console.log(city);

var city = "Haridwar";

console.log(city);


// Task 1.2
console.log("\n--- Task 1.2 ---");

function showMessage() {
    console.log(message);

    var message = "Hello";

    console.log(message);
}

showMessage();


// Task 1.3 — Shadow Trap
console.log("\n--- Task 1.3 ---");

var name = "global";

function test() {
    console.log(name);

    var name = "local";
}

test();


// Task 1.4 — Magic Trick
console.log("\n--- Task 1.4 ---");

console.log(favouriteFood);

var favouriteFood = "Pizza";

console.log(favouriteFood);


// ============================================================
// PART 2 — FUNCTION HOISTING
// ============================================================

// Task 2.1
console.log("\n--- Task 2.1 ---");

try {
    sayHi();
}
catch (error) {
    console.log(error.name + ": " + error.message);
}

var sayHi = function () {
    console.log("Hi!");
};


// Task 2.2
console.log("\n--- Task 2.2 ---");

try {
    sayHello();
}
catch (error) {
    console.log(error.name + ": " + error.message);
}

const sayHello = function () {
    console.log("Hello!");
};


// Task 2.3 — Sorting Table

console.log("\n--- Task 2.3 ---");

console.log("function declaration → Works before its line");

console.log("var function expression → TypeError");

console.log("const arrow function → ReferenceError");

console.log("let function expression → ReferenceError");


// Task 2.4 — Two Functions, Same Name

console.log("\n--- Task 2.4 ---");

console.log(fnA());

function fnA() {
    return "First";
}

function fnA() {
    return "Second";
}


// Task 2.5 — Top-Down Story

console.log("\n--- Task 2.5 ---");

wakeUp();

eatBreakfast();

goToCollege();

function wakeUp() {
    console.log("Wake up.");
}

function eatBreakfast() {
    console.log("Eat breakfast.");
}

function goToCollege() {
    console.log("Go to college.");
}

console.log(
    "This works because function declarations are completely hoisted."
);


// ============================================================
// PART 3 — let, const AND TEMPORAL DEAD ZONE
// ============================================================

// Task 3.1

console.log("\n--- Task 3.1 ---");

try {
    console.log(PI);
}
catch (error) {
    console.log(error.name + ": " + error.message);
}

const PI = 3.14;


// Task 3.2 — typeof Surprise

console.log("\n--- Task 3.2 ---");

console.log(typeof x);

var x = 5;

try {
    console.log(typeof y);
}
catch (error) {
    console.log(error.name + ": " + error.message);
}

let y = 5;


// Task 3.3 / 3.4 — Error Detective

console.log("\n--- Task 3.3 / 3.4 ---");


// (a) undefined

console.log(exampleVar);

var exampleVar = 10;


// (b) ReferenceError

try {
    console.log(exampleLet);
}
catch (error) {
    console.log(error.name + ": " + error.message);
}

let exampleLet = 10;


// (c) TypeError

try {
    exampleFunction();
}
catch (error) {
    console.log(error.name + ": " + error.message);
}

var exampleFunction = function () {
    console.log("Works");
};


// (d) Works because of function hoisting

hoistedFunction();

function hoistedFunction() {
    console.log("Function declaration works before its line.");
}


// ============================================================
// PART 4 — FIRST CLOSURE
// ============================================================

// Task 4.1 — Counter

console.log("\n--- Task 4.1 ---");

function makeCounter() {

    let count = 0;

    return function () {

        count++;

        return count;
    };
}


const counterA = makeCounter();

const counterB = makeCounter();


console.log("counterA:", counterA());

console.log("counterA:", counterA());

console.log("counterA:", counterA());

console.log("counterA:", counterA());

console.log("counterA:", counterA());


console.log("counterB:", counterB());

console.log("counterB:", counterB());


// Task 4.2

console.log("\n--- Task 4.2 ---");

try {
    console.log(count);
}
catch (error) {
    console.log(error.name + ": " + error.message);
}

console.log("count is private inside the closure.");


// Task 4.3 — Multiplier Factory

console.log("\n--- Task 4.3 ---");

function makeMultiplier(n) {

    return function (x) {

        return x * n;
    };
}


const double = makeMultiplier(2);

const triple = makeMultiplier(3);


console.log(double(5));

console.log(triple(5));


// Task 4.4 — Greeter

console.log("\n--- Task 4.4 ---");

function makeGreeter(greeting) {

    return function (name) {

        return greeting + ", " + name + "!";
    };
}


console.log(
    makeGreeter("Namaste")("Aditi")
);


// Task 4.5 — Chai Counter

console.log("\n--- Task 4.5 ---");

function makeCupCounter() {

    let cups = 0;

    return function () {

        cups++;

        return "Cup number " + cups + " of chai";
    };
}


const friendOne = makeCupCounter();

const friendTwo = makeCupCounter();


console.log(friendOne());

console.log(friendOne());

console.log(friendOne());


console.log(friendTwo());

console.log(friendTwo());


// ============================================================
// PART 5 — PRIVATE DATA WITH CLOSURES
// ============================================================

// Task 5.1 + 5.2 — Wallet

console.log("\n--- Task 5.1 / 5.2 ---");

function createWallet(start) {

    let balance = start;

    return {

        add(n) {

            balance += n;

            return balance;
        },


        spend(n) {

            if (n > balance) {

                return "Insufficient balance";
            }

            balance -= n;

            return balance;
        },


        show() {

            return balance;
        },


        reset() {

            balance = start;

            return balance;
        }
    };
}


const wallet = createWallet(100);


console.log("Add 50:", wallet.add(50));

console.log("Spend 30:", wallet.spend(30));

console.log("Spend 500:", wallet.spend(500));

console.log("Balance:", wallet.show());


// Try to access private balance

console.log("wallet.balance:", wallet.balance);


// Try to change balance

wallet.balance = 99999;

console.log(
    "After changing wallet.balance:",
    wallet.show()
);


// Reset

console.log(
    "After reset:",
    wallet.reset()
);


// Task 5.3 — Login Guard

console.log("\n--- Task 5.3 ---");

function limiter(max) {

    let used = 0;

    return function () {

        if (used < max) {

            used++;

            return "Attempt " + used + " of " + max;
        }

        return "Locked!";
    };
}


const tryLogin = limiter(3);


console.log(tryLogin());

console.log(tryLogin());

console.log(tryLogin());

console.log(tryLogin());


// Task 5.4 — Secret Diary

console.log("\n--- Task 5.4 ---");

function createDiary() {

    const entries = [];

    return {

        write(text) {

            entries.push(text);
        },


        read() {

            return [...entries];
        }
    };
}


const diary = createDiary();


diary.write("Learn JavaScript closures.");

diary.write("Practice JavaScript every day.");


console.log("Diary:", diary.read());

console.log(
    "Direct access:",
    diary.entries
);


// ============================================================
// PART 6 — CLOSURES IN LOOPS
// ============================================================

console.log("\n--- PART 6 ---");


// Task 6.1 — var

const withVar = [];


for (var i = 0; i < 3; i++) {

    withVar.push(function () {

        return i;
    });
}


console.log(
    "withVar:",
    withVar.map(function (f) {
        return f();
    })
);


// Task 6.1 — let

const withLet = [];


for (let j = 0; j < 3; j++) {

    withLet.push(function () {

        return j;
    });
}


console.log(
    "withLet:",
    withLet.map(function (f) {
        return f();
    })
);


// Explanation

console.log(
    "var gives [3, 3, 3] because all functions share the same i."
);

console.log(
    "let gives [0, 1, 2] because each loop iteration has its own j."
);


// Task 6.2 — Timer Version

console.log("\n--- Task 6.2 ---");


for (var k = 1; k <= 3; k++) {

    setTimeout(function () {

        console.log("var:", k);

    }, 1000);
}


for (let m = 1; m <= 3; m++) {

    setTimeout(function () {

        console.log("let:", m);

    }, 1000);
}


// Task 6.3
// Change var to let to fix the loop.

// for (let k = 1; k <= 3; k++) {
//     setTimeout(function () {
//         console.log("fixed:", k);
//     }, 1000);
// }


// ============================================================
// PART 7 — MINI PROJECT
// SMART WALLET WITH LOGIN GUARD
// ============================================================

console.log("\n--- PART 7: SMART WALLET ---");


function createSmartWallet(start) {

    let balance = start;

    const transactions = [];


    return {

        add(amount) {

            balance += amount;

            transactions.push(
                "Added " + amount
            );

            return balance;
        },


        spend(amount) {

            if (amount > balance) {

                return "Insufficient balance";
            }


            balance -= amount;

            transactions.push(
                "Spent " + amount
            );

            return balance;
        },


        show() {

            return balance;
        },


        history() {

            return [...transactions];
        }
    };
}


// Login guard

const walletGuard = limiter(3);


// Create wallet with 500

const smartWallet = createSmartWallet(500);


console.log(
    "Starting balance:",
    smartWallet.show()
);


// Add 200

console.log(
    "After add(200):",
    smartWallet.add(200)
);


// Spend 150

let attempt1 = walletGuard();

console.log(attempt1);


if (attempt1 !== "Locked!") {

    console.log(
        "After spend(150):",
        smartWallet.spend(150)
    );
}


// Spend 1000

let attempt2 = walletGuard();

console.log(attempt2);


if (attempt2 !== "Locked!") {

    console.log(
        "After spend(1000):",
        smartWallet.spend(1000)
    );
}


// Final balance

console.log(
    "Final balance:",
    smartWallet.show()
);


// History

console.log(
    "History:",
    smartWallet.history()
);


// Final Summary

console.log(
    "Final Summary: Starting balance = 500, " +
    "after adding 200 = 700, " +
    "after spending 150 = 550, " +
    "failed spend of 1000 leaves balance = 550."
);


// Bonus — Discount Factory

console.log("\n--- BONUS ---");


function makeDiscount(percent) {

    return function (price) {

        return price -
            (price * percent / 100);
    };
}


const festive = makeDiscount(10);


console.log(
    "10% discount on 500:",
    festive(500)
);


// ============================================================
// PART 8 — DEBUGGING CHALLENGE
// ============================================================

console.log("\n--- PART 8 ---");


// Snippet 1

console.log("Snippet 1:");

var total = 5;

console.log(total);


// Snippet 2

console.log("Snippet 2:");

var greet = function () {

    console.log("Hi");
};

greet();


// Snippet 3

console.log("Snippet 3:");

function makeCounterFixed() {

    let c = 0;

    return function () {

        c++;

        return c;
    };
}


const next = makeCounterFixed();


console.log(
    next(),
    next()
);


// Snippet 4

console.log("Snippet 4:");

function makeCounter2Fixed() {

    let count = 0;

    return function () {

        count++;

        return count;
    };
}
const n = makeCounter2Fixed();
console.log(
    n(),
    n(),
    n()
);

console.log("\n===== LAB 6 COMPLETE =====");