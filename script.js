console.log('UZOMIAN!!!');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////// FUNCTIONS ////////////////////////////////////////////////////////////////////////////

/////////// Event Handlers //////////////////////////

const createGrid = function(e) {
    if (e.type == 'keydown') if (e.code != 'Enter') return;
    if (inputNum.value == '' || inputNum.value > 100 || +inputNum.value < 1) return;

    const val = inputNum.value;
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
    gridDiv.setAttribute('style', `background-color: ${gridDivBg}; width: ${gridDivSize}px; height: ${gridDivSize}px; border: 1px solid hsl(26, 50%, 65%); border-bottom: none;`);
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

const changeBtnStyle = function(e) {
    e.target.textContent = e.target.textContent == multiColorText ? singleColorText : multiColorText;
    colorPickerDiv.classList.toggle('hidden');
    colorBtn.classList.toggle('multi-color');
}

const changeCurrentColor = function(e) {
    currentColor = e.target.value;
    colorPickerLabel.style.backgroundColor = e.target.value;
}

const updateInputNum = function(e) {
    inputNum.value = e.target.value;
}

const updateInputRange = function(e) {
    inputRange.value = e.target.value;
}

const changeSketchColor = function(e) {
    if (!gridDiv.childNodes.length) return;

    const gridArr = [...gridDiv.childNodes];

    if (e.target.value == 'multi-color') {
        gridArr.forEach(grid => {
            if (grid.style.backgroundColor) grid.style.backgroundColor = generateRandomColor();
        })
    }

    if (e.target.value == 'current-color') {
        gridArr.forEach(grid => {
            if (grid.style.backgroundColor) grid.style.backgroundColor = currentColor;
        })
    }
}

const changeGridColor = function(e) {
    gridDivBg = e.target.value;
    gridDiv.style.backgroundColor = gridDivBg;
}

const eraseGrid = function(e) {
    e.target.classList.toggle('on-eraser');
    if (gridDiv.innerHTML == '') return;

    clickCount = 0;

    if ([...e.target.classList].includes('on-eraser')) {
        gridDiv.removeEventListener('click', startAndStopDraw);
        gridDiv.addEventListener('click', onEraser);
    }
    else {
        gridDiv.addEventListener('click', startAndStopDraw);
        gridDiv.removeEventListener('click', onEraser);
    }
}

const onEraser = function() {
    clickCount++;
    clickCount % 2 ? this.addEventListener('mouseover', erase) : this.removeEventListener('mouseover', erase);
}

const erase = function(e) {
    if (e.target == gridDiv) return;
    e.target.style.backgroundColor = '';
};

/////////// Helpers //////////////////////////

const clearInputField = function() {
    inputNum.value = '';
}

const generateRandomColor = function() {
    const h = generateRandomNumber(0, 360);
    const s = generateRandomNumber(0, 100);
    const l = generateRandomNumber(0, 100);

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
const inputNum = document.querySelector('.grid-size--input__number');
const inputRange = document.querySelector('.grid-size--input__range');
const inputGridColor = document.querySelector('#grid-color');
const createGridBtn = document.querySelector('.control-btns--create');
const clearGridBtn = document.querySelector('.control-btns--clear');
const colorBtn = document.querySelector('.color-picker--btn');
const eraseBtn = document.querySelector('.eraser-btn');
const colorPickerDiv = document.querySelector('.color-picker');
const colorPicker = document.querySelector('input[type="color"]');
const colorPickerLabel = document.querySelector('label[for="color-picker"]');
const sketchColor = document.querySelector('.control-btns--sketch');

// Other Variables
const gridDivSize = 560;
const multiColorText = colorBtn.innerText;
const singleColorText = 'Single-color Pen';
let clickCount = 0;
let eraserClickCount = 0;
let currentColor = colorPicker.value;
let gridDivBg = inputGridColor.value;

// Event Listeners
gridDiv.addEventListener('click', startAndStopDraw);
createGridBtn.addEventListener('click', createGrid);
clearGridBtn.addEventListener('click', clearGrid);
colorBtn.addEventListener('click', changeBtnStyle);
eraseBtn.addEventListener('click', eraseGrid);
colorPicker.addEventListener('change', changeCurrentColor);
inputRange.addEventListener('mousemove', updateInputNum);
inputNum.addEventListener('change', updateInputRange);
inputGridColor.addEventListener('change', changeGridColor);
sketchColor.addEventListener('click', changeSketchColor);
window.addEventListener('keydown', createGrid);


clearGrid();

