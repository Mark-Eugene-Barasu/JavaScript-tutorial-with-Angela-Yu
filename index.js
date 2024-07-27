// FizzBuzz quiz 

let numbers = [];

for(let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        let i = `FizzBuzz`;
        numbers.push(i);
    } else if (i % 3 === 0) {
        let i =  `Fizz`;
        numbers.push(i);
    } else if (i % 5 === 0) {
        let i = `Buzz`;
        numbers.push(i);
    } else {
        // i = i;
        numbers.push(i);
    }
}

console.log(numbers);
