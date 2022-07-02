const container = document.querySelector("#container");
let newG = document.getElementById("newGrid")
newG.addEventListener('click', () => { startGrid()})
let cell;

function createCell (nCell) {
    for (c = 0; c < nCell; c++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        cell.addEventListener('mouseover', e => e.target.classList.add('colour-class'));
    }
}

function createGrid (nRow, nCol) {
    container.style.setProperty('--nRows', nRow);
    container.style.setProperty('--nCols', nCol);
    for (let r = 0; r < nRow; r++) {
        createCell(nCol);
    }
}

function startGrid() {
    let sizeG = prompt("Enter the amount of rows/columns. 1 - 100.", 16);
    if (sizeG >= 1 && sizeG <= 100) {
        createGrid (sizeG, sizeG);
    } else {
        do {
            sizeG = prompt("Bad Input. Enter a value between 1 - 100");
        } while (sizeG < 1 || sizeG > 100)
        createGrid (sizeG, sizeG);
    }
}



//newGrid.addEventListener('click', function() {
//let gInput = prompt("Enter the amount of rows/columns. 0 - 100.")
//if (!Number.isInteger(gInput)) return "ERROR";  
//if (gInput >= 100 || gInput <= 0) return "ERROR! Stay in range 0 - 100."
//});

let curColour = 'black';
const colours = { black: 'black'};
e => e.target.classList.add(colours[curColour]);

startGrid();