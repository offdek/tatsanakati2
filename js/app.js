//Movement Animation
const body = document.querySelector("body");
const smoke = document.querySelector(".smoke");
const sunSplash = document.querySelector(".sun-splash");

// desktop
const speedSmoke = 15;
const rotateSunSplashRate = 7;

body.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 270;
  smoke.style.transform = `translate(${xAxis * -speedSmoke}px)`;
  sunSplash.style.transform = `translateX(${xAxis * -rotateSunSplashRate}px)`;
});
// mobile;
const waitRollingRate = 10;

if (
  typeof DeviceMotionEvent !== "undefined" &&
  typeof DeviceMotionEvent.requestPermission === "function"
) {
  // alert("iOS 13+");
  requestOrientationPermission();
} else {
  // alert("no 13+");
  window.addEventListener("deviceorientation", (e) => {
    smoke.style.transform = `translate(${e.alpha}px)`;
    sunSplash.style.transform = `translateX(${e.alpha / waitRollingRate}px)`;
  });
}

function requestOrientationPermission() {
  DeviceMotionEvent.requestPermission()
    .then((response) => {
      if (response == "granted") {
        smoke.style.transform = `translate(${e.alpha}px)`;
        sunSplash.style.transform = `translateX(${
          e.alpha / waitRollingRate
        }px)`;
      }
    })
    .catch(console.error);
}
