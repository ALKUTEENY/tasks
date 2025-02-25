

function updateFlipClock() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, "0");
    var minutes = String(now.getMinutes()).padStart(2, "0");
    var seconds = String(now.getSeconds()).padStart(2, "0");

    flipUpdate("hours", hours);
    flipUpdate("minutes", minutes);
    flipUpdate("seconds", seconds);
}

function flipUpdate(unit, value) {
    var top = document.getElementById(`${unit}-top`);
    var bottom = document.getElementById(`${unit}-bottom`);

    if (top.textContent !== value) {
        bottom.textContent = top.textContent;
        top.textContent = value;

        bottom.classList.add("flip-animation");
        setTimeout(() => bottom.classList.remove("flip-animation"), 500);
    }
}

setInterval(updateFlipClock, 1000);
updateFlipClock();
