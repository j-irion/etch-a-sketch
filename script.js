let grid = document.getElementById("grid");
let txtOutput = document.getElementById("txt-output");

function createGrid(size) {
  for (let i = 0; i < size * size; ++i) {
    let field = document.createElement("div");
    field.classList.add("field");
    field.style.height = `${grid.clientHeight / size}px`;
    field.style.width = `${grid.clientHeight / size}px`;
    grid.appendChild(field);
  }
  createHoverFunctionality();
  txtOutput.textContent = "Grid created!";
}

function createHoverFunctionality() {
  let fields = document.querySelectorAll(".field");
  fields.forEach((field) => {
    field.addEventListener("mouseover", () => {
      field.style.backgroundColor = giveRandomColor();
    });
  });
}

function giveRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

let sizeButton = document.getElementById("btn-size");
sizeButton.addEventListener("click", () => {
  let size = prompt("How many squares per side should your grid have?");
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  if (size <= 64 && size > 0) createGrid(Math.floor(size));
  else createGrid(64);
});
