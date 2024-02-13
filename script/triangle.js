function triangleArea(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBase.value;
    const base = parseFloat(triangleBaseValue);
    
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeight.value;
    const height = parseFloat(triangleHeightValue);
    const Area = 0.5 * base * height;

    const areaSpan = document.getElementById('area-span');
    areaSpan.innerText = Area;

    const areaCalculation = document.getElementById('area-cal');
    const p = document.createElement('p');
    p.innerText ='triangle',Area;
    areaCalculation.appendChild(p);

}

function ractangleArea(){
    const inputWidth = document.getElementById('input-width');
    const ractWidth = inputWidth.value;
    const width = parseFloat(ractWidth);

    const inputLength = document.getElementById('input-length');
    const ractLength = inputLength.value;
    const length = parseFloat(ractLength);
    
    const ractArea = width * length;

    const ractSpan = document.getElementById('ract-span');
    ractSpan.innerText = ractArea;
}

function parallelogramArea(){
    const inputBase = document.getElementById('input-base');
    const parallalBase = inputBase.value;
    const base = parseFloat(parallalBase);

    const inputHeight = document.getElementById('input-height');
    const parrallalHeight = inputHeight.value;
    const height = parseFloat(parrallalHeight);

    const parallelArea = base * height;

    const parellelSpan = document.getElementById('parallel-span');
    parellelSpan.innerText = parallelArea;

    
}