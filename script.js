// Za galeriju 1
const slidesContainer1 = document.getElementById("slides-container1");
const slide1 = document.querySelector(".slide1");
const prevButton1 = document.getElementById("slide-arrow-prev1");
const nextButton1 = document.getElementById("slide-arrow-next1");

nextButton1.addEventListener("click", () => {
  const slideWidth1 = slide1.clientWidth;
  const maxScroll1 = slidesContainer1.scrollWidth - slidesContainer1.clientWidth;
  if (slidesContainer1.scrollLeft + slidesContainer1.clientWidth < maxScroll1) {
    slidesContainer1.scrollLeft += slideWidth1;
  }
});

prevButton1.addEventListener("click", () => {
  const slideWidth1 = slide1.clientWidth;
  if (slidesContainer1.scrollLeft > 0) {
    slidesContainer1.scrollLeft -= slideWidth1;
  }
});

// Za galeriju 2
const slidesContainer2 = document.getElementById("slides-container2");
const slide2 = document.querySelector(".slide2");
const prevButton2 = document.getElementById("slide-arrow-prev2");
const nextButton2 = document.getElementById("slide-arrow-next2");

nextButton2.addEventListener("click", () => {
  const slideWidth2 = slide2.clientWidth;
  const maxScroll2 = slidesContainer2.scrollWidth - slidesContainer2.clientWidth;
  if (slidesContainer2.scrollLeft + slidesContainer2.clientWidth < maxScroll2) {
    slidesContainer2.scrollLeft += slideWidth2;
  }
});

prevButton2.addEventListener("click", () => {
  const slideWidth2 = slide2.clientWidth;
  if (slidesContainer2.scrollLeft > 0) {
    slidesContainer2.scrollLeft -= slideWidth2;
  }
});

// Za galeriju 3
const slidesContainer3 = document.getElementById("slides-container3");
const slide3 = document.querySelector(".slide3");
const prevButton3 = document.getElementById("slide-arrow-prev3");
const nextButton3 = document.getElementById("slide-arrow-next3");

nextButton3.addEventListener("click", () => {
  const slideWidth3 = slide3.clientWidth;
  const maxScroll3 = slidesContainer3.scrollWidth - slidesContainer3.clientWidth;
  if (slidesContainer3.scrollLeft + slidesContainer3.clientWidth < maxScroll3) {
    slidesContainer3.scrollLeft += slideWidth3;
  }
});

prevButton3.addEventListener("click", () => {
  const slideWidth3 = slide3.clientWidth;
  if (slidesContainer3.scrollLeft > 0) {
    slidesContainer3.scrollLeft -= slideWidth3;
  }
});

// Za galeriju 4
const slidesContainer4 = document.getElementById("slides-container4");
const slide4 = document.querySelector(".slide4");
const prevButton4 = document.getElementById("slide-arrow-prev4");
const nextButton4 = document.getElementById("slide-arrow-next4");

nextButton4.addEventListener("click", () => {
  const slideWidth4 = slide4.clientWidth;
  const maxScroll4 = slidesContainer4.scrollWidth - slidesContainer4.clientWidth;
  if (slidesContainer4.scrollLeft + slidesContainer4.clientWidth < maxScroll4) {
    slidesContainer4.scrollLeft += slideWidth4;
  }
});

prevButton4.addEventListener("click", () => {
  const slideWidth4 = slide4.clientWidth;
  if (slidesContainer4.scrollLeft > 0) {
    slidesContainer4.scrollLeft -= slideWidth4;
  }
});

// Za galeriju 5
const slidesContainer5 = document.getElementById("slides-container5");
const slide5 = document.querySelector(".slide5");
const prevButton5 = document.getElementById("slide-arrow-prev5");
const nextButton5 = document.getElementById("slide-arrow-next5");

nextButton5.addEventListener("click", () => {
  const slideWidth5 = slide5.clientWidth;
  const maxScroll = slidesContainer5.scrollWidth - slidesContainer5.clientWidth;
  if (slidesContainer5.scrollLeft + slidesContainer5.clientWidth < maxScroll) {
    slidesContainer5.scrollLeft += slideWidth5;
  }
});

prevButton5.addEventListener("click", () => {
  const slideWidth5 = slide5.clientWidth;
  if (slidesContainer5.scrollLeft > 0) {
    slidesContainer5.scrollLeft -= slideWidth5;
  }
});

// Za galeriju 6
const slidesContainer6 = document.getElementById("slides-container6");
const slide6 = document.querySelector(".slide6");
const prevButton6 = document.getElementById("slide-arrow-prev6");
const nextButton6 = document.getElementById("slide-arrow-next6");

nextButton6.addEventListener("click", () => {
  const slideWidth6 = slide6.clientWidth;
  const maxScroll = slidesContainer6.scrollWidth - slidesContainer6.clientWidth;
  if (slidesContainer6.scrollLeft + slidesContainer6.clientWidth < maxScroll) {
    slidesContainer6.scrollLeft += slideWidth6;
  }
});

prevButton6.addEventListener("click", () => {
  const slideWidth6 = slide6.clientWidth;
  if (slidesContainer6.scrollLeft > 0) {
    slidesContainer6.scrollLeft -= slideWidth6;
  }
});

// Za galeriju 7
const slidesContainer7 = document.getElementById("slides-container7");
const slide7 = document.querySelector(".slide7");
const prevButton7 = document.getElementById("slide-arrow-prev7");
const nextButton7 = document.getElementById("slide-arrow-next7");

nextButton7.addEventListener("click", () => {
  const slideWidth7 = slide7.clientWidth;
  const maxScroll = slidesContainer7.scrollWidth - slidesContainer7.clientWidth;
  if (slidesContainer7.scrollLeft + slidesContainer7.clientWidth < maxScroll) {
    slidesContainer7.scrollLeft += slideWidth7;
  }
});

prevButton7.addEventListener("click", () => {
  const slideWidth7 = slide7.clientWidth;
  if (slidesContainer7.scrollLeft > 0) {
    slidesContainer7.scrollLeft -= slideWidth7;
  }
});

// Za galeriju 8
const slidesContainer8 = document.getElementById("slides-container8");
const slide8 = document.querySelector(".slide8");
const prevButton8 = document.getElementById("slide-arrow-prev8");
const nextButton8 = document.getElementById("slide-arrow-next8");

nextButton8.addEventListener("click", () => {
  const slideWidth8 = slide8.clientWidth;
  const maxScroll = slidesContainer8.scrollWidth - slidesContainer8.clientWidth;
  if (slidesContainer8.scrollLeft + slidesContainer8.clientWidth < maxScroll) {
    slidesContainer8.scrollLeft += slideWidth8;
  }
});

prevButton8.addEventListener("click", () => {
  const slideWidth8 = slide8.clientWidth;
  if (slidesContainer8.scrollLeft > 0) {
    slidesContainer8.scrollLeft -= slideWidth8;
  }
});

// Za galeriju 9
const slidesContainer9 = document.getElementById("slides-container9");
const slide9 = document.querySelector(".slide9");
const prevButton9 = document.getElementById("slide-arrow-prev9");
const nextButton9 = document.getElementById("slide-arrow-next9");

nextButton9.addEventListener("click", () => {
  const slideWidth9 = slide9.clientWidth;
  const maxScroll = slidesContainer9.scrollWidth - slidesContainer9.clientWidth;
  if (slidesContainer9.scrollLeft + slidesContainer9.clientWidth < maxScroll) {
    slidesContainer9.scrollLeft += slideWidth9;
  }
});

prevButton9.addEventListener("click", () => {
  const slideWidth9 = slide9.clientWidth;
  if (slidesContainer9.scrollLeft > 0) {
    slidesContainer9.scrollLeft -= slideWidth9;
  }
});