// Generate DIVs for grid
// Make "value x value" amount of div
function divGen(value) {
    const container = document.querySelector('.grid-container');
    for (let i=0; i<value; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j=0; j<value; j++) {
            const cell = document.createElement('div');
            cell.classList.add("gridsquare");
            row.appendChild(cell)
        }
        container.appendChild(row);
    }

    // Function that will give divs clicked and dragged color.
    const cell = document.querySelectorAll('.gridsquare');
    cell.forEach((cell) => {
    cell.addEventListener('mousemove', (e) => {
        if (e.buttons == 1) { // If the mouse is down   
        // TODO:
        // Grab color from user
            e.target.style.background = 'red';
        }
    })

})
}

// ON or OFF for Grid Lines
function checkGridLines(e) {
    const row = document.querySelectorAll('.row');
    const cell = document.querySelectorAll('.gridsquare');
    if (e.target.textContent == 'OFF') {
        row.forEach((row) => {
            row.style.border = "1px solid gray";
        })
        cell.forEach((cell) => {
            cell.style.border = "1px solid gray";
        })
    }else if (e.target.textContent == 'ON') {
        row.forEach((row) => {
            row.style.border = "1px solid transparent";
        })
        cell.forEach((cell) => {
            cell.style.border = "1px solid transparent";
        })
    }
}

function clearGrid() {
    const grid = document.querySelector('.grid-container');
    grid.innerHTML = '';

}
// Grid line toggle Event listener
const button = document.querySelector('.toggle-button');
button.addEventListener('mouseup', (e) => {
    if (e.target.textContent == 'OFF') {
        e.target.textContent = 'ON';
        checkGridLines(e);
    }else if (e.target.textContent == 'ON') {
        e.target.textContent = 'OFF';
        checkGridLines(e);
    }
})

// Grabs value from slider
// Prints grid size above slider
const slider = document.querySelector('#myRange');
const gridSize = document.querySelector('.slider-value-box')

divGen(Number(slider.value));
gridSize.textContent = slider.value + 'x' + slider.value;

slider.addEventListener('input', () => {
    gridSize.textContent = `${slider.value}x${slider.value}`
    clearGrid();
    divGen(Number(slider.value));
})







