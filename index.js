
// fibonacci sequence challenge

// function fibonacci(n) {
//     let output = [];

//     if (n === 1) {
//         output = [0];
//     } else if (n === 2 ) {
//         output = [0, 1];
//     } else {
//         output = [0, 1];
//         for (let i = 2; i < n; i++) {
//             output.push(output[output.length - 2] + output[output.length - 1]);
//         }
//     }
    
//     return output;
// }

// let output = fibonacci(5);
// console.log(output);


//  simpler one from Meta Whatsapp
function printFibonacci(n) {
    let a = 0;
    let b = 1;
    let result = [];
  
    for (let i = 0; i < n; i++) {
      result.push(a);
      let sum = a + b;
      a = b;
      b = sum;
    }
  
    console.log(result);
  }

  printFibonacci(6);