const gridBtn = document.querySelector('#grid-scale-button');
const gridScale = document.querySelector('#grid-scale');
const container = document.querySelector('.container');

function setGrid() {
    let divYAxis = document.createElement('div');
    let divXAxis = document.createElement('div');
    
    clear(container);

    function clear(container) 
    { 
        while (container.firstChild) { 
            container.removeChild(container.firstChild); 
        }
    }

    divYAxis.classList.add('y-axis');
    divXAxis.classList.add('x-axis');

    for(i = 0; i < gridScale.value; i++) {
        divYAxis.append(divXAxis.cloneNode(true));
    }

    for(i = 0; i < gridScale.value; i++) {
        container.append(divYAxis.cloneNode(true));
    }
}

gridBtn.addEventListener('click', setGrid);