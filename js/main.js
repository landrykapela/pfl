const moveNext = (slides) => {
  let currentIndex = 0;
  let nextIndex = currentIndex + 1;
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

const movePrevious = (slides) => {
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

const slideShow = (slides, loop) => {
  let count = 1;
  if (loop) {
    setInterval(() => {
      moveNext(slides);
    }, 10000);
  } else {
    setInterval(() => {
      if (count < 5) {
        moveNext(slides);
        count++;
      } else clearInterval();
    }, 10000);
  }
};
window.addEventListener("load", () => {
  if (window.location.pathname == "/index.html") {
    const slider = document.querySelector("#slider");

    const controlLeft = document.querySelector("#control-left");
    const controlRight = document.querySelector("#control-right");
    if (slider) {
      const slides = Array.from(slider.children);
      slideShow(slides, false);

      if (controlRight) {
        controlRight.addEventListener("click", () => {
          console.log("moving right");
          moveNext(slides);
        });
      }
      if (controlLeft) {
        controlLeft.addEventListener("click", () => {
          movePrevious(slides);
        });
      }
    }
  }

  if (window.location.pathname == "/products.html") {
    const btnExpandGeneralAccordion = document.querySelector(
      "#expand_accordion_general"
    );
    const btnExpandMedicalAccordion = document.querySelector(
      "#expand_accordion_medical"
    );
    const btnExpandLifeAccordion = document.querySelector(
      "#expand_accordion_life"
    );
    if (btnExpandLifeAccordion) {
      btnExpandLifeAccordion.addEventListener("click", (e) => {
        const accordion_body = document.querySelector("#accordion_body_life");
        if (e.target.textContent == "+") {
          accordion_body.classList.add("accordion-expand");
          e.target.textContent = "-";
        } else {
          accordion_body.classList.remove("accordion-expand");
          e.target.textContent = "+";
        }
      });
    }
    if (btnExpandGeneralAccordion) {
      btnExpandGeneralAccordion.addEventListener("click", (e) => {
        const accordion_body = document.querySelector(
          "#accordion_body_general"
        );
        if (e.target.textContent == "+") {
          accordion_body.classList.add("accordion-expand");
          e.target.textContent = "-";
        } else {
          accordion_body.classList.remove("accordion-expand");
          e.target.textContent = "+";
        }
      });
    }
    if (btnExpandMedicalAccordion) {
      btnExpandMedicalAccordion.addEventListener("click", (e) => {
        const accordion_body = document.querySelector(
          "#accordion_body_medical"
        );
        if (e.target.textContent == "+") {
          accordion_body.classList.add("accordion-expand");
          e.target.textContent = "-";
        } else {
          accordion_body.classList.remove("accordion-expand");
          e.target.textContent = "+";
        }
      });
    }
  }
});

//menu button
const menuButton = document.querySelector("#menu-button");
if (menuButton) {
  menuButton.addEventListener("click", (e) => {
    const nav = document.querySelector("#top-nav");
    if (nav.classList.contains("accordion-expand")) {
      e.target.innerHTML = "&darr;";
      nav.classList.remove("accordion-expand");
    } else {
      nav.classList.add("accordion-expand");
      e.target.innerHTML = "&uarr;";
    }
  });
}
