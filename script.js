console.log('UZOMIAN!!!');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////// FUNCTIONS ////////////////////////////////////////////////////////////////////////////
const changeColor = function(e) {
    if (e.target == gridDiv) return;
    e.target.style.backgroundColor = '#eee';
}

const createGrid = function() {
    if (input.value == '') return;

    // Clear existing grid
    clearGrid();

    // Create new grid
    for (let i = 0; i < input.value; i++) 
    for (let j = 0; j < input.value; j++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('style', `height: ${gridDivSize/input.value}px; width: ${gridDivSize/input.value}px;`)
        gridDiv.appendChild(squareDiv);
    }

    console.log(+input.value);
    gridDiv.style.display = 'grid';
    gridDiv.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
}

const clearGrid = function() {
    gridDiv.innerHTML = '';
    gridDiv.setAttribute('style', `background-color: #272C33; width: ${gridDivSize}px; height: ${gridDivSize}px;`);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Variables
const gridDiv = document.querySelector('.grid');
const input = document.querySelector('.grid-size--input');
const inputBtn = document.querySelector('.grid-size--btn');
const gridDivSize = 560;

clearGrid();

// Event Listeners
gridDiv.addEventListener('mouseover', changeColor);
inputBtn.addEventListener('click', createGrid);

// 1. Create btn for clearing grid
// 2. Anytime create grid btn is clicked, clear the input
// 3. If user clicks while hovering, stop changing color of (drawing on) grid, if user clicks again, resume changing color of grid
// 4. Extra credit challenge in TOP
// 5. Cheer your page up a little