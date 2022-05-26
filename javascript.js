let container = document.querySelector('.grid-container');
let gridSize = document.querySelector('#grid-scale');
let gridBtn = document.querySelector('#grid-scale-button');
let colorBtn = document.querySelector('#color-button');
let rgbBtn = document.querySelector('#rgb-button');
let eraserBtn = document.querySelector('#eraser-button');
let clearBtn = document.querySelector('#clear-button')
let h1 = document.querySelector('h1');
let paintbrushMode = 'color';

function buildGrid() {
    if(gridSize.value >= 1 && gridSize.value <= 100) {
        clearGrid(container);
        let cell = document.createElement('div');
        let cellSize = container.clientWidth / gridSize.value;
        cell.classList.add('cell');
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
        for(i = 0; i < gridSize.value * gridSize.value; i++) {
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
});
rgbBtn.addEventListener('click', () => {
    paintbrushMode = 'rgb';
});
rgbBtn.addEventListener('click', () => {
    rgbBtn.classList.toggle('rainbowRGB');
});
eraserBtn.addEventListener('click', () => {
    paintbrushMode = 'eraser';
});
clearBtn.addEventListener('click', () => {
    clearGrid(container);
});
gridBtn.addEventListener('click', buildGrid);