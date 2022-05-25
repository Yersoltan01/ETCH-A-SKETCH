const gridBtn = document.querySelector('#grid-scale-button');
const gridScale = document.querySelector('#grid-scale');
const container = document.querySelector('.container');

function setGrid() {
    let divYAxis = document.createElement('div');
    let divXAxis = document.createElement('div');

    divYAxis.classList.add('y-axis');
    divXAxis.classList.add('x-axis');

    console.log(gridScale.value)
    for(i = 0; i < gridScale.value; i++) {
        divYAxis.append(divXAxis.cloneNode(true));
    }

    for(i = 0; i < gridScale.value; i++) {
        container.append(divYAxis.cloneNode(true));
    }
}

gridBtn.addEventListener('click', setGrid);