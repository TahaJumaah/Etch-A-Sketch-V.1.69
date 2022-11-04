let pixelHeight = '0vh'
let pixelWidth = ' 0vw'
let index = 1;
let smalCanvasButton = document.getElementById('smallCanvas');


// Canvas Types, attached to buttons, all they do is set the size, then loop the actual div creation function.

function smallCanvas() {
pixelHeight = '10%';
pixelWidth = '10%';
for (index ; index <= 100; index++) {

    createPixels();    
}   
}

function mediumCanvas() {
    pixelHeight = '5%';
    pixelWidth = '5%';
    index = 1;
    for (index ; index <= 400; index++) {
        createPixels();
    }}

    function largeCanvas() {
        pixelHeight = '2.5%';
        pixelWidth = '2.5%'
        index = 1;
        for (index; index < 2000; index++) {
            createPixels()
            
        }
        
    }
//END OF CANVAS TYPES


function createPixels(numberOfPixels){
    let div = document.createElement('div');
    div.style.width = pixelHeight;
    div.style.height = pixelWidth;
    div.style.backgroundColor = 'red';
    document.getElementById('drawingContainerCentered').appendChild(div);

}

smalCanvasButton.addEventListener('click'


