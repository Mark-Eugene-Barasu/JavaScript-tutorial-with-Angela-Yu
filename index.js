setInterval(() => {
        let currentCount = document.getElementById("textarea");
        let currentCountLength = currentCount.value.length;
        let printCurrentCount = document.getElementById("output");

        printCurrentCount.innerHTML = `You have written ${Number(currentCountLength)} characters, you have ${200 - Number(currentCountLength)} characters left.`;

        if((200 - currentCountLength) < 0) {
            currentCount.style.outline = "3px solid red";
        } else {
            currentCount.style.outline = "none";
        }
        }
, 100);