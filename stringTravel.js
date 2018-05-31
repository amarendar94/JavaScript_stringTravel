var timeInt;
var temp;
document.getElementById("right").addEventListener('click', function () {
    clearInterval(timeInt);
    timeInt = setInterval(function () {
        document.getElementById("textbox2").value += document.getElementById("textbox1").value.charAt(0);
        document.getElementById("textbox1").value = document.getElementById("textbox1").value.substr(1);
        if(document.getElementById("textbox1").value.length == 0){
            clearInterval(timeInt);
        }

    }, 1000)
});

document.getElementById("left").addEventListener('click', function () {
    clearInterval(timeInt);
    timeInt = setInterval(function () {
        document.getElementById("textbox1").value += document.getElementById("textbox2").value.charAt(0);
        document.getElementById("textbox2").value = document.getElementById("textbox2").value.substr(1);
        if(document.getElementById("textbox2").value.length == 0){
            clearInterval(timeInt);
        }
    }, 1000)
});


document.getElementById("stop").addEventListener('click', function () {
    clearInterval(timeInt);
});
