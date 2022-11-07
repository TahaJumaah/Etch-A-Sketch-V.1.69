let pixelHeight = '0vh'
let pixelWidth = ' 0vw'
let index = 1;
let clickedDiv = document.getElementsByClassName('drawingDiv');
let mainDrawingCanvas = document.getElementById('drawingContainerCentered');
let smallCanvasButton = document.getElementById('smallCanvas');
let mediumCanvasButon = document.getElementById('mediumCanvas');
let largeCanvasButton = document.getElementById('largeCanvas');



function clearCanvas() {
    let mainCanvas = document.getElementById('drawingContainerCentered')
    mainCanvas.innerHTML='';
}
// Canvas Types, attached to buttons, all they do is set the size, then loop the actual div creation function.

function smallCanvas() {
    clearCanvas();
pixelHeight = '10%';
pixelWidth = '10%';
index = 1;
for (index ; index <= 100; index++) {
    createPixels();    
}   
}

function mediumCanvas() {
    clearCanvas();
    pixelHeight = '6.5%';
    pixelWidth = '5.5%';
    index = 1;
    for (index ; index <= 270; index++) {
        createPixels();
    }}

    function largeCanvas() {
        clearCanvas();
        pixelHeight = '5%';
        pixelWidth = '4%'
        index = 1;
        for (index; index < 501; index++) {
            createPixels()
            
        }
        
    }
//END OF CANVAS TYPES

// function addColor() {
//     drawingDiv.style.backgroundColor = 'red';
    
// };

function createPixels(numberOfPixels){
    let drawingDiv = document.createElement('div');
    drawingDiv.style.width = pixelHeight;
    drawingDiv.style.height = pixelWidth;
    drawingDiv.className = 'drawingDiv'
    // div.style.backgroundColor = 'red';
    drawingDiv.style.maxheight = 'inherit';
    // div.style.border = '0.1px solid black'
    document.getElementById('drawingContainerCentered').appendChild(drawingDiv);
    // addColor();
    // mainDrawingCanvas.style.width = 'fit-content';
}

// function addColor(){
//     let divToColor = document.getElementsByClassName('drawingDiv');
//     divToColor.addEventListener('click', addColor());
//     divToColor.style.backgroundColor = 'red';
// }




smallCanvasButton.addEventListener('click', smallCanvas)
mediumCanvasButon.addEventListener('click', mediumCanvas)
largeCanvasButton.addEventListener('click', largeCanvas)
