const calculator = document.getElementById('calculator');
const displayArea = document.getElementById('displayArea');


calculator.addEventListener("click", (e)=> {
    if (e.target.nodeName === "BUTTON") {
        switch(e.target.textContent) {
            case "C":
                clear();
                break;
            case "DEL":
                deleteOneValue();
                break;
            case "=":
                evaluate();
                break;
            default:
                addToDisplayArea (e.target.textContent);
        }
    }
});

function clear () {
    displayArea.value= "";
}

function deleteOneValue() {
    displayArea.value = displayArea.value.slice(0, -1); 
}

function addToDisplayArea(value) {
    displayArea.value += value;
}

function evaluate() {
    try {
        displayArea.value = eval(displayArea.value);

    } catch (e) {
        displayArea.value = "Error"; 
    }
}