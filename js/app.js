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

const MobileOrientation = () => {
  window.addEventListener("deviceorientation", (e) => {
    smoke.style.transform = `translate(${e.alpha}px)`;
    sunSplash.style.transform = `translateX(${e.alpha / waitRollingRate}px)`;
  });
};

window.onload = () => {
  if (
    window.DeviceMotionEvent &&
    typeof window.DeviceMotionEvent.requestPermission === "function"
  ) {
    requestOrientationPermission();
  } else {
    MobileOrientation();
  }
};

function requestOrientationPermission() {
  if (
    DeviceOrientationEvent &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    DeviceOrientationEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          MobileOrientation();
        }
      })
      .catch(console.error);
  } else {
    // handle regular non iOS 13+ devices
  }
}
