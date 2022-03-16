import useScreen from "./screen.js";
const screen = useScreen();

function greetUser(name){
    const output = `${name} is an asshole 🙄 `
    return output;
}

screen.log(greetUser);