const grid = document.querySelector(".grid");
const sizeSlider = document.querySelector("#size-slider");
const sliderValue = document.querySelector(".sliderValue");
const defaultSize = 16;

let currentSize = defaultSize;

function setNewSize(size) {
    currentSize = size;
}

function populateGrid(size) {
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size * size; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        grid.appendChild(box);
    }
}

function setSliderValue(value) {
    sliderValue.innerText = `${value} x ${value}`
}

function clearGrid() {
    grid.innerHTML = '';
}

function reloadGrid() {
    clearGrid();
    populateGrid(currentSize);
}

function changeSize(size) {
    setNewSize(size);
    setSliderValue(size);
    reloadGrid();
}


sizeSlider.onmousemove = () => setSliderValue(sizeSlider.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

window.onload = () => {
    setSliderValue(defaultSize);
    populateGrid(defaultSize);
}


