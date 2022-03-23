const reverseString = (str) => str.split("").reverse().join("");
const typeHere = "type here ";
const input = document.getElementById("in");

const typingClosure = () => {
  let count = 0;

  let goForward = true;

  const getAscend = (current) => {
    if (count === 0) return true;
    if (count === typeHere.length) return false;
    return current;
  };

  const getCurrentText = (text) =>
    text.split("").reduce((acc, current) => {
      if (acc.length <= count) {
        return (acc += current);
      }
      return acc;
    }, "");

  return () => {
    input.setAttribute("placeholder", getCurrentText(typeHere));
    if (goForward) {
      count++;
      goForward = getAscend(true);
      return;
    }
    count--;
    goForward = getAscend(false);
  };
};

const type = typingClosure();

const typeOverTime = () => {
  type();
  if (document.getElementById("in").value === "") {
    setTimeout(typeOverTime, 300);
  }
};

const setTyper = () => setTimeout(typeOverTime, 350);

export default setTyper;
