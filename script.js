//Task1
let tC = prompt("Enter temperature value in Celsius");
let tF = (9 / 5) * tC + 32;
if (!isNaN(parseInt(tC))) {
    alert(tF);
    let paragraph = document.getElementById("p");
    paragraph.innerHTML = "Temperature in Celcius: " + tC + "<br>" + "Temperature in Farenheith: " + tF;

} else {
    alert("Please enter number");
}

//Task2
let _admin = "Vasya";
let _name = _admin;
alert(_name);

