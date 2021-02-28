//Movement Animation
const body = document.querySelector("body");
const smoke = document.querySelector(".smoke");
const sunSplash = document.querySelector(".sun-splash");

const speedSmoke = 45;
const rotateSunSplash = 15;

body.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 270;
  smoke.style.transform = `translate(${xAxis * speedSmoke}px)`;
  sunSplash.style.transform = `rotate(${xAxis}deg)`;
  if (xAxis < 0) {
    sunSplash.style.top = `${xAxis * rotateSunSplash}px`;
  } else {
    sunSplash.style.top = `${xAxis * -rotateSunSplash}px`;
  }
});
