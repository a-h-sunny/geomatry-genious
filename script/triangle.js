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