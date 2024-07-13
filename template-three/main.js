let x = document.querySelectorAll(".videos-content .box"),
  w = document.querySelectorAll(".video-preview img"),
  up = document.getElementById("up");

upAppear();
controlVideoShow();

// Control Scroll
function upAppear() {
  window.onscroll = function () {
    if (window.scrollY >= 1000) up.style.display = "block";
    else up.style.display = "none";
    up.onclick = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  };
}

// Controll Video Show
function controlVideoShow() {
  for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function () {
      w.forEach((el) => el.classList.add("hide"));
      for (let j = 0; j < x[i].classList.length; j++) {
        for (let k = 0; k < w[i].classList.length; k++) {
          if (x[i].classList[j] == w[i].classList[k]) {
            w[i].classList.remove("hide");
          }
        }
      }
    });
  }
}
