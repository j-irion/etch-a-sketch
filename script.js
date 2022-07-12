function createGrid(size) {
  let grid = document.getElementById("grid");
  for (let i = 0; i < size * size; ++i) {
    let field = document.createElement("div");
    field.classList.add("field");
    field.style.height = `${grid.clientHeight / size}px`;
    field.style.width = `${grid.clientHeight / size}px`;
    grid.appendChild(field);
  }
}
