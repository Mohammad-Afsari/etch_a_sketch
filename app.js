// Add cells to grid container
const container = document.getElementById("grid-container")
const gridSize = document.getElementById("size").value
const sliderSize = document.getElementById("rangeInput")

// Create buttons
// Create button to clear grid
let clearBtn = document.createElement("button")
clearBtn.innerHTML = "Clear"
document.body.appendChild(clearBtn)

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
    // Shade in for user's chosen size
    shadeIn(size)
}

// Shade in
function shadeIn(size) {
    for (let i = 1; i <= size * size; i++) {
        let squares = document.querySelectorAll(`.square${i}`)
        //console.log(squares)
        squares.forEach(function(element) {
            element.addEventListener("mouseover", function(e) { // throw this into a function of it's own
                e.target.style.background = "red" // set to multi varying color
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

let testing = document.getElementById("chooseColor")

console.log(testing)