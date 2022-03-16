const useScreen = () => {
    // React is fun and games untill you're hooked
    const output = document.getElementById("out");
    const executeButton = document.getElementById("butt");
    const flushButton = document.getElementById("flush");
    
    const flush = () => output.value = "";
    flushButton.addEventListener("click", flush);
    
    let currentFunction = () => {};
    const getOutput = () => currentFunction(document.getElementById("in").value);
    executeButton.addEventListener("click", () => output.value =getOutput());
    
    return {
        log: (func = (val) => val) =>{
            currentFunction = func;
        }
    }
}

export default useScreen;