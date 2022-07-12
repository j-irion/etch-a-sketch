function createGrid(size) {
  let grid = document.getElementById("grid");
  for (let i = 0; i < size * size; ++i) {
    let field = document.createElement("div");
    field.classList.add("field");
    field.style.height = `${grid.clientHeight / size}px`;
    field.style.width = `${grid.clientHeight / size}px`;
    grid.appendChild(field);
  }
  createHoverFunctionality();
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
