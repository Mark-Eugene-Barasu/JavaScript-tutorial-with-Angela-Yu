// Life in weeks challenge
function lifeInWeeks() {
    let age = document.getElementById("inputAge").value;
    let lifeInWeeksLeft = 90 - Number(age);
    let days = lifeInWeeksLeft * 365;
    let weeks = lifeInWeeksLeft * 52;
    let months = lifeInWeeksLeft * 12;
    document.querySelector(".outputResult").innerHTML = `You are left with ${days} days, ${weeks} weeks, and ${months} months left.`;
}
    