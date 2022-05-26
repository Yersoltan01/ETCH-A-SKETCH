let container = document.querySelector('.grid-container');
let gridSlider = document.querySelector('#grid-scale');
let colorBtn = document.querySelector('#color-button');
let rgbBtn = document.querySelector('#rgb-button');
let eraserBtn = document.querySelector('#eraser-button');
let clearBtn = document.querySelector('#clear-button')
let h1 = document.querySelector('h1');
let gridSize = 16;
let paintbrushMode = 'color';

buildGrid();

function buildGrid() {
    if(gridSize >= 1 && gridSize <= 100) {
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
    else {
        alert('Please, enter valid data');
    }
}

function clearGrid(container) 
{ 
    while (container.firstChild) { 
        container.removeChild(container.firstChild); 
    }
}

container.addEventListener('mouseover', function(e) {
    let target = e.target.closest('.cell');
    if (!target) return;
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

colorBtn.addEventListener('click', () => {
    paintbrushMode = 'color';
    colorBtn.classList.add('colorWhite');
    rgbBtn.classList.remove('rainbowRGB');
    eraserBtn.classList.remove('eraser');

});
rgbBtn.addEventListener('click', () => {
    paintbrushMode = 'rgb';
    rgbBtn.classList.add('rainbowRGB');
    colorBtn.classList.remove('colorWhite');
    eraserBtn.classList.remove('eraser');
});
eraserBtn.addEventListener('click', () => {
    paintbrushMode = 'eraser';
    eraserBtn.classList.add('eraser');
    rgbBtn.classList.remove('rainbowRGB');
    colorBtn.classList.remove('colorWhite');
});
clearBtn.addEventListener('click', () => {
    clearGrid(container);
    rgbBtn.classList.remove('rainbowRGB');
    colorBtn.classList.remove('colorWhite');
    eraserBtn.classList.remove('eraser');
});

gridSlider.addEventListener('input', (e) => {
    gridSize = e.target.value;
    buildGrid();
});
// gridSize.onchange = (e) => changeSize(e.target.value)