import useScreen from "./screen.js";
import setTyper from "./typer.js";
setTyper();
const screen = useScreen();

function getManufacturingDate(carName) {
  let result = "";
  carName = carName.toLowerCase();
  if (carName === "bmw") {
    result = "7 march 1916";
  } else if (carName === "toyota") {
    result = "28 august 1937";
  } else if (carName === "lada") {
    result = "hueta kakaeto lol";
  } else {
    result = "You need to choose the mark.(Bmw,Toyota,Lada).";
  }
  return result;
}

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

screen.log(add);
