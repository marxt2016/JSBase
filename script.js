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

/*Task3 - Plus can be used for math operation and for concat strings
JS interpreter converts number(1000) to string and concatenates resulting a string*/
console.log(typeof 1000);
console.log(typeof "108");
console.log(typeof (1000 + "108"));

//Task4
/*Defer makes script to download at the same time when HTML is parsed, script is executed after DOM is built, but before the event =DOMContentLoaded.
Order of execution is the same as listed in HTML file.
Defer is applied when <script> has src, otherwise - ignored*/

/*Async makes scripts executable when they are loaded, first loaded - first executed. Small scripts are executed earlier.
Page contend is displayed immediately*/

