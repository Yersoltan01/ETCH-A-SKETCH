let gridBtn = document.querySelector('#grid-scale-button');
let gridSize = document.querySelector('#grid-scale');
let container = document.querySelector('.grid-container');
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
    target.style.backgroundColor = 'pink';
});

gridBtn.addEventListener('click', buildGrid);