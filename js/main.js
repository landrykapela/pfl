const slider = document.querySelector("#slider");
const slides = Array.from(slider.children);
const controlLeft = document.querySelector("#control-left");
const controlRight = document.querySelector("#control-right");
const moveNext = () => {
  let currentIndex = 0;
  let nextIndex = currentIndex + 1;
  console.log("slides: ", slides);
  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      currentIndex = index;
      nextIndex = index + 1;
      slide.classList.remove("active");
      slide.classList.add("hidden");
    }
    if (currentIndex + 1 == slides.length) {
      nextIndex = 0;
    }
  });
  slides[nextIndex].classList.remove("hidden");
  slides[nextIndex].classList.add("active");
};

const movePrevious = () => {
  let currentIndex = 0;
  let nextIndex = slides.length - 1;
  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      currentIndex = index;
      nextIndex = index - 1;
      slide.classList.remove("active");
      slide.classList.add("hidden");
    }
    if (currentIndex - 1 < 0) {
      nextIndex = slides.length - 1;
    }
  });
  slides[nextIndex].classList.remove("hidden");
  slides[nextIndex].classList.add("active");
};

if (controlRight) {
  controlRight.addEventListener("click", () => {
    console.log("moving right");
    moveNext();
  });
}
if (controlLeft) {
  controlLeft.addEventListener("click", () => {
    movePrevious();
  });
}

const slideShow = (loop) => {
  let count = 1;
  if (loop) {
    setInterval(() => {
      moveNext();
    }, 10000);
  } else {
    setInterval(() => {
      if (count < 5) {
        moveNext();
        count++;
      } else clearInterval();
    }, 10000);
  }
};
window.addEventListener("load", () => {
  slideShow(false);
});
