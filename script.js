import useScreen from "./screen.js";
const screen = useScreen();


function getManufacturingDate(carName){
    
    let result = "";
        carName = carName.toLowerCase();
    if (carName === "bmw") {
       result = "7 march 1916";
    }
    else if (carName === "toyota"){
       result = "28 august 1937";
    }
    else if (carName === "lada"){
       result = "hueta kakaeto lol";
    }
    else {
       result = "You need to choose the mark.(Bmw,Toyota,Lada).";
    }
    return result;
}


screen.log(getManufacturingDate);