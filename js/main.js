// Start Navbar
let toggleSwitcher = document.querySelector(".darkmode-switcher-label");
let logoLight = document.querySelector(".navbar-brand");
// Show Class Dark In Local Storage
if (localStorage.getItem("statues") !== null) {
  document.body.classList.add(localStorage.getItem("statues"));
}

toggleSwitcher.addEventListener("click", () => {
  // Add Dark Class To Body
  document.body.classList.toggle("dark");

  let storageEle = document.createElement("p");
  if (document.body.classList.contains("dark")) {
    storageEle.setAttribute("data-statues", "dark");
    localStorage.setItem("statues", storageEle.dataset.statues);
  } else {
    localStorage.clear();
  }

  handleDarkMode();
});
// End Navbar

function handleDarkMode() {
  // Switch Toggle
  if (document.body.classList.contains("dark")) {
    toggleSwitcher.classList.add("dark");
  } else {
    toggleSwitcher.classList.remove("dark");
  }

  // Add Logo Light
  logoLight.innerHTML = "";
  if (document.body.classList.contains("dark")) {
    logoLight.innerHTML = `<img src="../imgs/logo-light.png" alt="" />`;
  } else {
    logoLight.innerHTML = `<img src="../imgs/logo.svg" alt="" />`;
  }

  // Add Package Light
  let imgBoxesPackage = document.querySelectorAll(".package .row .image-box");
  imgBoxesPackage.forEach((box) => {
    box.innerHTML = " ";
    if (document.body.classList.contains("dark")) {
      box.innerHTML = `<img class="img-fluid" src="../imgs/package-light.png" alt="" />`;
    }
  });
}
handleDarkMode();
