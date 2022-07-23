const toggleSidebarBtn = document.querySelector("#toggle-sidebar");
const toggleDarkmodeBtn = document.querySelector("#darkmode-toggle");
const nav = document.querySelector("nav");
const chart = document.querySelector("#chart");
const logo = document.querySelector("#logo");
const body = document.querySelector("body");
let darkmode = false;

toggleSidebarBtn.addEventListener("click", toggleSidebar);
toggleDarkmodeBtn.addEventListener("click", toggleDarkmode);

function toggleSidebar() {
  nav.classList.toggle("close");
  console.log("Hi");
}

function toggleDarkmode() {
  body.classList.toggle("dark");
  if (!darkmode) {
    darkmode = true;
    chart.innerHTML = '<img src="./img/chart-dark.svg" alt="chart">';
    logo.innerHTML =
      '<img src="./img/logo-dark.svg" alt="logo" class="logo-img" width="50"><h1>dashboard</h1>';
    toggleDarkmodeBtn.innerHTML = '<i class="uil uil-toggle-on"></i>';
  } else if (darkmode) {
    darkmode = false;
    chart.innerHTML = '<img src="./img/chart.svg" alt="chart">';
    logo.innerHTML =
      '<img src="./img/logo.svg" alt="logo" class="logo-img" width="50"><h1>dashboard</h1>';
    toggleDarkmodeBtn.innerHTML = '<i class="uil uil-toggle-off"></i>';
  }
}
