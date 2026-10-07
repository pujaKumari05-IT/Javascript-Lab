function calculateDiscount(price, isMember) {
    if (isMember) {
        return price * 0.9;
    } else {
        return price;
    }
}

console.log(calculateDiscount(1000, true));
console.log(calculateDiscount(1000, false));