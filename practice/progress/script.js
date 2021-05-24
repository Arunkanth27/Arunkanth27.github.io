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
    intervalBar = setInterval(bar, 1000);
    bg("green");
});

document.getElementById("pause").addEventListener("click" , function () {
    bg("red");
    clearInterval(intervalBar);
});
function bar () {
    if(width == 100)
    {
        clearInterval(intervalBar);
    }
    else 
    {
        width++;
        element.style.width = width + "%";
    }
    document.getElementById("percent").textContent ='${width}%';

    if(width==15)
    {
        bg("grey");
    }
    else if (width == 30) {
        bg("blue");
    } else if (width == 45) {
        bg("green");
    } else if (width == 60) {
        bg("yellow");
    } else if (width == 75) {
        bg("orange");
    } else if (width == 90) {
        bg("pink");
    }

}

