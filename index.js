
let yourInput = prompt(`Enter your name`);
let firstCharacter = yourInput.slice(0,1).toUpperCase();

yourInput = firstCharacter + yourInput.slice(1, yourInput.length).toLowerCase();
alert(`Hello ${yourInput}`);