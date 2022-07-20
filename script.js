console.log('UZOMIAN!!!');

const gridDiv = document.querySelector('.grid');
gridDiv.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, 1fr); background-color: #272C33; width: 50%; gap: 4px;');


// Creates a 16 x 16 grid
for (let i = 0; i < 16; i++) 
    for (let j = 0; j < 16; j++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('style', `background-color: yellow; height: 20px;`)
        gridDiv.appendChild(squareDiv);
        console.log(squareDiv.getAttribute('width'));
    }