let element = document.getElementById("bar");
let width = 0;
let intervalBar;

const bg = function (color) {
    document.getElementById("bar").style.backgroundColor = color;
};

document.getElementById("play").addEventListener("click", function () {
    if(width == 100) {
        width = 0;
    }
    intervalBar = setInterval(bar, 30);
    // width = 0;
    bg("violet");
});

document.getElementById("pause").addEventListener("click", () => {
    bg("red");
    clearInterval(intervalBar);
});

function bar() {
    if (width == 100) {
        clearInterval(intervalBar);
        // width = 0;
    } else {
        width++;
        element.style.width = width + "%";
    }
    document.getElementById("percent").textContent = `${width}%`;

    if (width == 16) {
        bg("indigo");
    } else if (width == 30) {
        bg("blue");
    } else if (width == 46) {
        bg("green");
    } else if (width == 62) {
        bg("yellow");
    } else if (width == 78) {
        bg("orange");
    } else if (width == 90) {
        bg("pink");
    }
}