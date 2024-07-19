const container = document.querySelector(".container");
let size = 16;
const changeSize = document.querySelector("#gridSize");

changeSize.addEventListener("click", () => {
    size = prompt("Size: ");
    if (size <= 100 && size > 0) {
        drawGrid(size);
    }
    else {
        alert("Maximum grid size is 100.");
    }
});

function drawGrid(size) {
    container.innerHTML = '';

    for (let i = 0; i < size; i++) {
        let columnDiv = document.createElement("div");
        columnDiv.classList.add("columnDiv");
        container.appendChild(columnDiv);
        for (let j = 1; j <= size; j++) {
            let rowDiv = document.createElement("div");
            rowDiv.classList.add("rowDiv");
            columnDiv.appendChild(rowDiv);
        }
    }

    const rowDivs = document.querySelectorAll(".rowDiv");

    rowDivs.forEach(row => {
        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = getRandomColor();
        });
    });

    const cleanBtn = document.querySelector("#clean");
    cleanBtn.addEventListener("click", () => {
        rowDivs.forEach(row => {
            row.style.backgroundColor = "white";
        });
        drawGrid(16);
    });
}

drawGrid(size);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
