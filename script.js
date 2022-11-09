let pixelHeight = '0vh'
let pixelWidth = ' 0vw'
let clickedDiv = document.getElementsByClassName('drawingDiv');
let mainDrawingCanvas = document.getElementById('drawingContainerCentered');
let smallCanvasButton = document.getElementById('smallCanvas');
let mediumCanvasButon = document.getElementById('mediumCanvas');
let largeCanvasButton = document.getElementById('largeCanvas');
let clearCanvasButton = document.getElementById('clearCanvas')
let createdDivArray = [];


function clearCanvas() {
    for (let index = 0; index < createdDivArray.length; index++) {
        const element = createdDivArray[index];
        element.style.backgroundColor = '#F5F5F7';
    }
    mainDrawingCanvas.innerHTML = ''

}
// Canvas Types, attached to buttons, all they do is set the size, then loop the actual div creation function.

function smallCanvas() {
    clearCanvas();
pixelHeight = '10%';
pixelWidth = '10%';
for (let index = 1 ; index <= 100; index++) {
    createPixels();
}


}

function mediumCanvas() {
    clearCanvas();

    pixelHeight = '6.5%';
    pixelWidth = '5.5%';
    index = 1;
    for (let index = 1 ; index <= 270; index++) {
        createPixels();
    }}

    function largeCanvas() {
        clearCanvas();
        pixelHeight = '5%';
        pixelWidth = '4%'
        index = 1;
        for (let index = 1; index < 501; index++) {
            createPixels()
            
        }
        
    }
//END OF CANVAS TYPES

let drawingDivArray = [];
function createPixels(numberOfPixels){
    let drawingDiv = document.createElement('div');
    drawingDiv.style.width = pixelHeight;
    drawingDiv.style.flexdirection = 'row';
    drawingDiv.style.height = pixelWidth;
    drawingDiv.className = 'createdDiv'
    drawingDiv.style.maxheight = 'inherit';
    createdDivArray.push(drawingDiv);
    document.getElementById('drawingContainerCentered').appendChild(drawingDiv);

    for (let index = 0; index < createdDivArray.length; index++) {
        const element = createdDivArray[index];
        element.addEventListener('mousedown', colortheDiv);
        // element.addEventListener('touchstart', colortheDiv);
        window.addEventListener('mouseup', mouseUpEndColoring);
    }
}
let colorPicker = document.getElementById('colorPicker');

function colortheDiv() {
    console.log(colorPicker.jscolor.toHEXString()); 
    this.style.backgroundColor = colorPicker.jscolor.toHEXString();
    for (let index = 0; index < createdDivArray.length; index++) {
        const element = createdDivArray[index];
        element.addEventListener('mouseover', addColor);
        // element.addEventListener('touchmove', addColor)
    }
}

function addColor(){
    this.style.backgroundColor = colorPicker.jscolor.toHEXString();
}

function mouseUpEndColoring() {
    for (let index = 0; index < createdDivArray.length; index++) {
        const element = createdDivArray[index];
        element.removeEventListener('mouseover', addColor)
    }
    
}

smallCanvasButton.addEventListener('click', smallCanvas)
mediumCanvasButon.addEventListener('click', mediumCanvas)
largeCanvasButton.addEventListener('click', largeCanvas)
clearCanvasButton.addEventListener('click', clearCanvas)
