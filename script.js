const grid = document.querySelector('.grid');
const slider = document.querySelector('#range-slider');
const sliderSpan = document.querySelector("#slider-value");
const colorPicker = document.querySelector('#color-picker');
const clearBtn = document.querySelector("#clearBtn");
const colorBtn = document.querySelector('input[value="Color"]');

console.log(colorBtn);

let mode = 'color';

let canDraw = false;

grid.addEventListener('mousedown', function () {
    canDraw = true;
});

grid.addEventListener('mouseup', function () {
    canDraw = false;
});

function populateGrid(size) {
    grid.style.setProperty('--size', size);
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mousemove', updateColor);
        grid.appendChild(div);
    }
}

function updateColor() {
    if(!canDraw) {
        return;
    } else {
        if(mode === 'color') {
            this.style.backgroundColor = colorPicker.value;
        } else if(mode === 'eraser') {
            this.style.backgroundColor = 'white';
        } else {
            let randomR = Math.random() * 256;
            let randomG = Math.random() * 256;
            let randomB = Math.random() * 256;
            this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        }
    }
}

function changeMode(input) {
    mode = input;
}

function updateSliderValue() {
    sliderSpan.innerHTML = slider.value + "x" + slider.value;
}

function resetGrid(size) {
    grid.innerHTML = '';
    populateGrid(size);
}

window.onload = () => populateGrid(16);

slider.addEventListener('input', updateSliderValue);

slider.onchange = (e) => resetGrid(e.target.value);
clearBtn.onclick = () => resetGrid(slider.value);
