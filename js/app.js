//Movement Animation
var body = document.querySelector("body");
var smoke = document.querySelector(".smoke");
var sunSplash = document.querySelector(".sun-splash");

// desktop
var speedSmoke = 15;
var rotateSunSplashRate = 7;

body.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 270;
  smoke.style.transform = `translate(${xAxis * -speedSmoke}px)`;
  sunSplash.style.transform = `translateX(${xAxis * -rotateSunSplashRate}px)`;
});
// mobile;
var waitRollingRate = 10;

window.addEventListener("load", () => {
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", (e) => {
      smoke.style.transform = `translate(${e.alpha}px)`;
      sunSplash.style.transform = `translateX(${e.alpha / waitRollingRate}px)`;
    });
  }
});
