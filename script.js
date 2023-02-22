const grid = document.querySelector(".grid");
const sizeSlider = document.querySelector("#size-slider");
const colorPicker = document.querySelector("#color-picker");
const sliderValue = document.querySelector(".sliderValue");
const colorBtn = document.querySelector("#color-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const clearBtn = document.querySelector("#clear-btn");

const defaultColor = "#000"
const defaultSize = 16;
const defaultMode = "color"; // Available modes - Color, Rainbow, Eraser, Clear

let currentSize = defaultSize;
let currentMode = defaultMode;
let currentColor = defaultColor;

let mouseDown = false
grid.onmousedown = () => (mouseDown = true)
grid.onmouseup = () => (mouseDown = false)

function setNewSize(size) {
    currentSize = size;
}

function setNewMode(mode) {
    setToggle(mode);
    currentMode = mode;
}

function setNewColor(color) {
    currentColor = color;
}

function setToggle(mode) {
    if(mode === "color") {
        colorBtn.classList.add("active");
        rainbowBtn.classList.remove("active");
        eraserBtn.classList.remove("active");
    } else if(mode === "rainbow") {
        colorBtn.classList.remove("active");
        rainbowBtn.classList.add("active");
        eraserBtn.classList.remove("active");
    } else if(mode === "eraser") {
        colorBtn.classList.remove("active");
        rainbowBtn.classList.remove("active");
        eraserBtn.classList.add("active");
    } else {
        colorBtn.classList.remove("active");
        rainbowBtn.classList.remove("active");
        eraserBtn.classList.remove("active");
    }
}

function populateGrid(size) {
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size * size; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        // add event listeners to each box
        box.addEventListener("mouseover", changeColor);
        box.addEventListener("mousedown", changeColor);

        grid.appendChild(box);
    }
}

function changeColor(e) {
    if(!mouseDown) {
        return;
    }
    switch(currentMode) {
        case "color":
            e.target.style.backgroundColor = currentColor;
            break;
        case "rainbow":
            e.target.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            break;
        case "eraser":
            e.target.style.backgroundColor = "#fff";
            break;
        default:
            e.target.style.backgroundColor = currentColor;
            break;
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

colorPicker.onchange = (e) => setNewColor(e.target.value);
sizeSlider.onmousemove = () => setSliderValue(sizeSlider.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);
colorBtn.onclick = () => setNewMode("color");
rainbowBtn.onclick = () => setNewMode("rainbow");
eraserBtn.onclick = () => setNewMode("eraser");
clearBtn.onclick = () => reloadGrid();

window.onload = () => {
    setSliderValue(defaultSize);
    populateGrid(defaultSize);
}


