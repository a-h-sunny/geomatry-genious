function getInputValue(inputText){
    const inputValue = document.getElementById(inputText);
    const inputHeight = inputValue.value;
    const height = parseFloat(inputHeight);
    return height;
}

function printArea(setArea,area){
    const printArea = document.getElementById(setArea);
    printArea.innerText = area;
}

function rhombusArea(){
    const d1 = getInputValue('input-d1');
    const d2 = getInputValue('input-d2');
    const Area = 0.5 * d1 * d2;
    
    printArea('rom-span',Area);
}

function pantagonArea(){
    const p = getInputValue('input-p');
    const d = getInputValue('input-d');
    const Area = 0.5 * p * d;
   
    printArea('pan-span',Area);
}