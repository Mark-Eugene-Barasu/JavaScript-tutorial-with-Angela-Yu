// arrays in javaScript

let guestList = [`Angela`, `Jack`, `Pam`, `James`, `Lara`, `Jason`];

let name = prompt(`Enter your name:`);

if (guestList.includes(name)){
    alert(`Your welcome.`);
} else {
    alert(`Sorry, your not allowed.`);
}
