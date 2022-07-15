// Generate DIVs for grid
// Make "value x value" amount of div
function divGen(value) {
    const container = document.querySelector('.container');
    for (let i=0; i<value; i++) {
        const row = document.createElement('div');
        row.classList.add("row");
        for (let j=0; j<value; j++) {
            const cell = document.createElement("div");
            cell.classList.add("gridsquare");
            //cell.textContent = (i * value) + j;
            row.appendChild(cell)
        }
        container.appendChild(row);
    }
}
divGen(16);
