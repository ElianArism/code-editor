const minimizeBtn = document.getElementById("minimize");
const maximizeBtn = document.getElementById("maximize");
const closeBtn = document.getElementById("close");

minimizeBtn.addEventListener("click", () => {
  window.windowActions.minimize();
});

maximizeBtn.addEventListener("click", () => {
  window.windowActions.maximize();
});

closeBtn.addEventListener("click", () => {
  window.windowActions.close();
});
