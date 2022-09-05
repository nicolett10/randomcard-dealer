/* eslint-disable */
// import "bootstrap";
import "./style.css";

window.onload = () => {
  let icon = null;
  let prevIcon = null;
  setInterval(function() {
    icon = generaterandomtype();
    console.log(icon);
    document.querySelector(".card").innerHTML = generaterandomnumber();
    if (prevIcon != null) {
      document.querySelector(".card").classList.remove(prevIcon);
    }
    document.querySelector(".card").classList.add(icon);
    prevIcon = icon;
  }, 1000);
};

let generaterandomtype = () => {
  let type = ["diamond", "spade", "heart", "club"];
  let indextype = Math.floor(Math.random() * type.length);
  return type[indextype];
};

let generaterandomnumber = () => {
  let numbers = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K"
  ];
  let indexnumb = Math.floor(Math.random() * numbers.length);
  return numbers[indexnumb];
};
