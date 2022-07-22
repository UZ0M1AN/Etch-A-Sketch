console.log('UZOMIAN!!!');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////// FUNCTIONS ////////////////////////////////////////////////////////////////////////////

/////////// Event Handlers //////////////////////////

const createGrid = function() {
    if (input.value == '') return;

    const val = input.value;
    clearGrid();

    // Create new grid
    for (let i = 0; i < val; i++) 
    for (let j = 0; j < val; j++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('style', `height: ${gridDivSize/val}px; width: ${gridDivSize/val}px;`)
        gridDiv.appendChild(squareDiv);
    }

    gridDiv.style.display = 'grid';
    gridDiv.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
}

const clearGrid = function() {
    clearInputField();

    gridDiv.innerHTML = '';
    gridDiv.setAttribute('style', `background-color: #272C33; width: ${gridDivSize}px; height: ${gridDivSize}px;`);
}

const startAndStopDraw = function() {
    if (gridDiv.innerHTML == '') return;
    clickCount++;
    clickCount % 2 ? this.addEventListener('mouseover', changeColor) : this.removeEventListener('mouseover', changeColor);
}

const changeColor = function(e) {
    if (e.target == gridDiv) return;
    e.target.style.backgroundColor = colorBtn.textContent == multiColorText ? currentColor : generateRandomColor();
}

const changeBtnText = function(e) {
    e.target.textContent = e.target.textContent == multiColorText ? singleColorText : multiColorText;
    colorPickerDiv.classList.toggle('hidden');
}

const changeCurrentColor = function(e) {
    currentColor = e.target.value;
}

/////////// Helpers //////////////////////////

const clearInputField = function() {
    input.value = '';
}

const generateRandomColor = function() {
    const h = generateRandomNumber(0, 360);
    const s = generateRandomNumber(0, 100);
    const l = generateRandomNumber(40, 90);

    return `hsl(${h}, ${s}%, ${l}%)`;
}

const generateRandomNumber = function(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////// Variables //////////////////////////

// DOM Variables
const gridDiv = document.querySelector('.grid');
const input = document.querySelector('.grid-size--input');
const createGridBtn = document.querySelector('.controls--create-btn');
const clearGridBtn = document.querySelector('.controls--clear-btn');
const colorBtn = document.querySelector('.color-scheme');
const colorPickerDiv = document.querySelector('.color-picker');
const colorPicker = document.querySelector('input[type="color"]');

// Other Variables
const gridDivSize = 560;
const multiColorText = 'Use multi-color';
const singleColorText = 'Use single color';
let clickCount = 0;
let currentColor = colorPicker.value;

// Event Listeners
gridDiv.addEventListener('click', startAndStopDraw);
createGridBtn.addEventListener('click', createGrid);
clearGridBtn.addEventListener('click', clearGrid);
colorBtn.addEventListener('click', changeBtnText);
colorPicker.addEventListener('change', changeCurrentColor);


clearGrid();


// 1. Create an option to use text input or range input for selecting grid size (dblclick event perhaps?)
// b. Perhaps add a 'change to multi-color sketch' view
// 2. Make the color picker hide and display more beautifully
// 3. Style your multi-color and single-color buttons better with JS (let single-color btn be the color of the currentColor)
// b. Add a 'pen' heading to describe 3. above
// 4. Cheer your page up a little
// 5. Add a dark mode

// Update your instructions
// Use the radiobtn to select btw range and typed input
// Click the 'multi-color sketch' btn to see your sketch in multi-color
// Chose whether you want single-color or multi-color pen