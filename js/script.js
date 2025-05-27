const menu = document.getElementById("menu-bar");
const navbar = document.querySelector(".navbar");
const scrollTopBtn = document.querySelector("#scroll-top");
const loaderContainer = document.querySelector(".loader-container");

if (menu && navbar) {
  menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };

  window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if (scrollTopBtn) {
      if (window.scrollY > 60) {
        scrollTopBtn.classList.add("active");
      } else {
        scrollTopBtn.classList.remove("active");
      }
    }
  };
}

function loader() {
  if (loaderContainer) {
    loaderContainer.classList.add("fade-out");
  }
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;
