const button = document.getElementById("toggle-btn");
const statusText = document.getElementById("status");


let currentTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(currentTheme);
updateUI();


button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  currentTheme = document.body.classList.contains("dark") ? "dark" : "light";

  localStorage.setItem("theme", currentTheme);

  updateUI();
});


function updateUI() {
  if (currentTheme === "dark") {
    button.textContent = "Light Mode";
    statusText.textContent = "Current Theme: Dark";
  } else {
    button.textContent = "Dark Mode";
    statusText.textContent = "Current Theme: Light";
  }
}