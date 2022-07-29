const grid = document.querySelector('.grid');
const slider = document.querySelector('#range-slider');
const sliderSpan = document.querySelector("#slider-value");

function populateGrid(size) {
    grid.style.setProperty('--size', size);
    for(let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        grid.appendChild(div);
    }
}

function updateSliderValue() {
    sliderSpan.innerHTML = "Value " + slider.value;
}

slider.addEventListener('input', updateSliderValue);


populateGrid(8);
