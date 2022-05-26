let container = document.querySelector('.grid-container');
let gridSlider = document.querySelector('#grid-scale');
let gridSizeLabel = document.querySelector('.grid-size-label');
let colorBtn = document.querySelector('#color-button');
let rgbBtn = document.querySelector('#rgb-button');
let eraserBtn = document.querySelector('#eraser-button');
let clearBtn = document.querySelector('#clear-button')
let h1 = document.querySelector('h1');
let gridSize = 16;
let paintbrushMode = 'color';

//build initial 16x16 Grid 
buildGrid();

// Build the Grid
function buildGrid() {
    clearGrid(container);
    let cell = document.createElement('div');
    let cellSize = container.clientWidth / gridSize;
    cell.classList.add('cell');
    cell.style.width = cellSize + "px";
    cell.style.height = cellSize + "px";
    for(i = 0; i < gridSize * gridSize; i++) {
        container.append(cell.cloneNode(true));
    }
}

// Clear the Grid
function clearGrid(container) 
{ 
    while (container.firstChild) { 
        container.removeChild(container.firstChild); 
    }
}

//Event to know when a mouse is moving through cells in a grid.
container.addEventListener('mouseover', function(e) {
    let target = e.target.closest('.cell');
    // Filters mouseover event which is not related to cells
    if (!target) return;
    //Change cell's color basing on the installed mode
    if(paintbrushMode == 'color') {
        target.style.backgroundColor = 'white';
    }
    if(paintbrushMode == 'eraser') {
        target.style.backgroundColor = 'black';
    }
    if(paintbrushMode == 'rgb') {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
});
// Listen for different paintbrush modes activation
colorBtn.addEventListener('click', () => {
    paintbrushMode = 'color';
    colorBtn.classList.add('colorWhite');
    rgbBtn.classList.remove('rainbowRGB');
    eraserBtn.classList.remove('eraser');
    h1.classList.remove('rainbowh1');

});
rgbBtn.addEventListener('click', () => {
    paintbrushMode = 'rgb';
    rgbBtn.classList.add('rainbowRGB');
    colorBtn.classList.remove('colorWhite');
    eraserBtn.classList.remove('eraser');
    h1.classList.add('rainbowh1');
});
eraserBtn.addEventListener('click', () => {
    paintbrushMode = 'eraser';
    eraserBtn.classList.add('eraser');
    h1.classList.remove('rainbowh1');
    rgbBtn.classList.remove('rainbowRGB');
    colorBtn.classList.remove('colorWhite');
});
clearBtn.addEventListener('click', () => {
    clearGrid(container);
    colorBtn.classList.add('colorWhite');
    h1.classList.remove('rainbowh1');
    rgbBtn.classList.remove('rainbowRGB');
    eraserBtn.classList.remove('eraser');
});

gridSlider.addEventListener('input', (e) => {
    gridSize = e.target.value;
    gridSizeLabel.textContent = `${gridSize} x ${gridSize}`;
    buildGrid();
});