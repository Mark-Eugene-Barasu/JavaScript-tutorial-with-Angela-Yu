// life in weeks challenge

let age  = document.getElementById("inputAge").value;

function lifeInWeeks(age) {
    let lifeInWeeksLeft = 90 - age;
    alert(lifeInWeeksLeft);
    let days = lifeInWeeksLeft * 365;
    let weeks = lifeInWeeksLeft * 52;
    let months = lifeInWeeksLeft * 12;

    document.querySelector(".outputResult").innerHTML = `You are left with ${days} days, ${weeks} weeks and ${months} months left.`
}
