function getMilk(money) {
    return money % 1.5;
}

let change = getMilk(4);
console.log(change);