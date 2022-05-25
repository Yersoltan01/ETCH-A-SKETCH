const gridBtn = document.querySelector('#grid-scale-button');
const gridScale = document.querySelector('#grid-scale');
const container = document.querySelector('.container');

/*function setGrid() {
    const divYAxis = document.createElement('div');
    const divXAxis = document.createElement('div');

    divYAxis.classList.add('y-axis');
    divXAxis.classList.add('x-axis');

    console.log(gridScale.value)
    for(i = 0; i < gridScale.value; i++) {
        console.log(divYAxis);
        divYAxis.append(divXAxis);
        console.log(divYAxis);
    }

    // for(i = 0; i < gridScale.value; i++) {
    //     divXAxis.append(divYAxis);
    //     divXAxis.append(divYAxis);
    //     divXAxis.append(divYAxis);
    // }

    for(i = 0; i < gridScale.value; i++) {
        container.append(divYAxis);
    }
}*/

function setGrid() {
    let divYAxis = document.createElement('div');
    let divXAxis = document.createElement('div');

    divYAxis.classList.add('y-axis');
    divXAxis.classList.add('x-axis');
    // container.append(divXAxis.cloneNode(true));
    // container.append(divXAxis.cloneNode(true));

    console.log(gridScale.value)
    for(i = 0; i < gridScale.value; i++) {
        divYAxis.append(divXAxis.cloneNode(true));
    }

    for(i = 0; i < gridScale.value; i++) {
        container.append(divYAxis.cloneNode(true));
    }

    // for(i = 0; i < gridScale.value; i++) {
    //     container.append(divXAxis);
    // }
}

gridBtn.addEventListener('click', setGrid);