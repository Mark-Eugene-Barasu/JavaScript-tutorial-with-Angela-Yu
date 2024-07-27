// love calculator

let firstUser = prompt(`What is your name?:`);
let secondUser = prompt(`Who is your crush?:`);

// random numbers between 1 - 100
let randomPerCentage = Math.round(Math.random() * 100) + 1

if (randomPerCentage >= 70) {
    alert(`The love percentage between ${firstUser} ❤️ ${secondUser} \n${randomPerCentage}% \n You love each other like Romeo loves Juliet.`);
} else if (randomPerCentage > 30 && randomPerCentage <= 70) {
    alert(`The love percentage between ${firstUser} ❤️ ${secondUser} \n${randomPerCentage}%`);
} else {
    alert(`The love percentage between ${firstUser} ❤️ ${secondUser} \n${randomPerCentage}% \n You'll go together like water and oil.`);
}
