
// Add cells to grid container
const container = document.getElementById("grid-container")
const clearBtn = document.getElementById("clear")
const gridSizeOrig = document.getElementById("size")
const gridSize = document.getElementById("size").value
const sliderSize = document.getElementById("rangeInput")
const colorPicker = document.getElementById("colorPicker")
const defaultColor = "#0000ff"


// Create a colour picker for the user
colorPicker.value = defaultColor
colorPicker.addEventListener("input",function(e){
    let colour = e.target.value
    let allDivs = document.querySelectorAll("div > div")
    allDivs.forEach(function(element) {
        element.addEventListener("mouseover", function(e) {
            if (e.target.classList.value.substring(0,6) === "square") {
                e.target.style.background = `${colour}`
            }
        })
    })
})

// Add event listeners
clearBtn.addEventListener("click", clear)

// Clear grid
function clear() {
    for (let i = 1; i <= 10000; i++) {
        let squares = document.querySelectorAll(`.square${i}`)
        squares.forEach(function(element) {
            element.style.backgroundColor = 'white'
        });
    }
}



// Create Grid
function createGrid(size){
    // CSS
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    // Create grid
    for (let i = 1; i <= size * size; i++) {
        let cell = document.createElement("div")
        cell.classList = `square${i}`
        cell.innerHTML = ""
        
        container.appendChild(cell)
    }
    gridSizeOrig.textContent = `${size} x ${size}`
    
    shadeIn(size)
    colorPicker.value = defaultColor
}


// Shade in
function shadeIn(size) {
    for (let i = 1; i <= size * size; i++) {
        let squares = document.querySelectorAll(`.square${i}`)
        //console.log(squares)
        squares.forEach(function(element) {
            element.addEventListener("mouseover", function(e) { // throw this into a function of it's own
                e.target.style.background = "#0000ff" // set to multi varying color
            })
        });
    }
}

// Customise size of grid 
sliderSize.addEventListener("change",function(e){
    container.innerHTML = ''
    container.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`
    container.style.gridTemplateRows = `repeat(${e.target.value}, 1fr)`
    createGrid(e.target.value)
})

// Run
createGrid(gridSize)


