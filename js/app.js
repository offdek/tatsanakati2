//Movement Animation
const body = document.querySelector("body");
const smoke = document.querySelector(".smoke");
const sunSplash = document.querySelector(".sun-splash");

body.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 270;
  smoke.style.transform = `translate(${xAxis * 45}px)`;
  sunSplash.style.transform = `rotate(${xAxis * 1.25}deg)`;
  if (xAxis < 0) {
    sunSplash.style.top = `${xAxis * 17}px`;
  } else {
    sunSplash.style.top = `0`;
  }
});
