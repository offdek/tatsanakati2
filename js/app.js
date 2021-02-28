//Movement Animation
const body = document.querySelector("body");
const smoke = document.querySelector(".smoke");
const sunSplash = document.querySelector(".sun-splash");

// desktop
const speedSmoke = 45;
const rotateSunSplashRate = 15;

body.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 270;
  smoke.style.transform = `translate(${xAxis * speedSmoke}px)`;
  sunSplash.style.transform = `rotate(${xAxis}deg)`;
  if (xAxis < 0) {
    sunSplash.style.top = `${xAxis * rotateSunSplashRate}px`;
  } else {
    sunSplash.style.top = `${xAxis * -rotateSunSplashRate}px`;
  }
});

//mobile
const waitRollingRate = 40;

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", (e) => {
    smoke.style.transform = `translate(${e.alpha}px)`;
    sunSplash.style.transform = `rotate(${e.alpha / waitRollingRate}deg)`;
    if (e.alpha < 0) {
      sunSplash.style.left = `${e.alpha / -12}px`;
      sunSplash.style.top = `${e.alpha / 6}px`;
    } else {
      sunSplash.style.left = `${e.alpha / -12}px`;
      sunSplash.style.top = `${e.alpha / -6}px`;
    }
  });
}
