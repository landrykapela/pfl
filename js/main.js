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
  if (window.location.pathname == "/index.html") {
    const slider = document.querySelector("#slider");
    const slides = Array.from(slider.children);
    const controlLeft = document.querySelector("#control-left");
    const controlRight = document.querySelector("#control-right");
    slideShow(false);

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
  }

  if (window.location.pathname == "/services.html") {
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
