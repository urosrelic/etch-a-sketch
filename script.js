const grid = document.querySelector('.grid');
const slider = document.querySelector('#range-slider');
const sliderSpan = document.querySelector("#slider-value");
const color = document.querySelector('#color-picker');

function populateGrid(size) {
    grid.style.setProperty('--size', size);
    for(let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');

        div.addEventListener('mousemove', function(){
            div.style.backgroundColor = color.value
        })
        grid.appendChild(div);
    }
}

function updateSliderValue() {
    sliderSpan.innerHTML = slider.value + "x" + slider.value;
}

function clearGrid() {
    grid.innerHTML = '';
}

function resetGrid(size) {
    clearGrid();
    populateGrid(size);
}

slider.addEventListener('input', updateSliderValue);
slider.onchange = (e) => resetGrid(e.target.value);
window.onload = () => populateGrid(16);