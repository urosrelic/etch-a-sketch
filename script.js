const grid = document.querySelector('.grid');
const slider = document.querySelector('#range-slider');
const sliderSpan = document.querySelector("#slider-value");
const color = document.querySelector('#color-picker');
const colorModeBtn = document.querySelector("#colorModeBtn");
const rainbowModeBtn = document.querySelector("#rainbowModeBtn");
const eraserModeBtn = document.querySelector("#eraserModeBtn");
const clearBtn = document.querySelector("#clearBtn");

let draw = false;

window.addEventListener('mousedown', function () {
    draw = true;
});

window.addEventListener('mouseup', function () {
    draw = false;
});

function populateGrid(size) {
    grid.style.setProperty('--size', size);
    for(let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.addEventListener('mousemove', function () {
            if(!draw) {
                return;
            }
            div.style.backgroundColor = color.value
        })

        grid.appendChild(div);
    }
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
