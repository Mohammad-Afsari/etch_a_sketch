// Add cells to grid container
const container = document.getElementById("grid")

// Loop and create a 16 by 16 grid of square divs
for (let i = 1; i < 17; i++) {
    let cell = document.createElement("div")
    cell.classList = `square${i}`
    cell.innerHTML = "Square"
    container.appendChild(cell)
}

// Create hover effect to change the div color (background color) when the mouse passes over them
//let squares = document.getElementsByClassName(`square1`)
for (let i = 1; i < 17; i++) {
    // let squares = document.getElementsByClassName(`square${i}`)
    let squaresTesting = document.querySelectorAll(`.square${i}`)
    // console.log(squares)
    console.log(squaresTesting)

    squaresTesting.forEach(function(element) {
        element.addEventListener("mouseover", function(e) {
            e.target.style.background = "red"
            console.log(e)
        })
    });
}



//console.log(squares)