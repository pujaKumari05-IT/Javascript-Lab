function calculatePrice(price, tax = 0.18) {
    return price + (price * tax);
}

console.log(calculatePrice(1000, 0.10));
console.log(calculatePrice(1000));