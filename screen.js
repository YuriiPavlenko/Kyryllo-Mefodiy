const useScreen = () => {
  // React is fun and games untill you're hooked (he-he)  8======D O;
  const output = document.getElementById("out");
  const executeButton = document.getElementById("butt");
  const flushButton = document.getElementById("flush");

  const flush = () => (output.value = "");
  flushButton.addEventListener("click", flush);

  let currentFunction = () => {};
  const getOutput = () => {
    const argumentsAray = document.getElementById("in").value.split(", ");
    return currentFunction(...argumentsAray);
  };
  executeButton.addEventListener("click", () => (output.value = getOutput()));

  return {
    log: (func = (val) => val) => {
      currentFunction = func;
    },
  };
};

export default useScreen;
