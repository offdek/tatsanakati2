//Movement Animation
const body = document.querySelector("body");
const smoke = document.querySelector(".smoke");
const sunSplash = document.querySelector(".sun-splash");
const btn = document.querySelector(".btn");
// desktop
const speedSmoke = 15;
const rotateSunSplashRate = 7;

body.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 270;
  smoke.style.transform = `translateX(${xAxis * -speedSmoke}px)`;
  sunSplash.style.transform = `translateX(${xAxis * -rotateSunSplashRate}px)`;
});
// mobile;
const userAgent = navigator.userAgent || navigator.vendor || window.opera;
let px = 45; // Position x and y
let vx = 0; // Velocity x and y
const updateRate = 1 / 32;
// Windows Phone must come first because its UA also contains "Android"
if (/windows phone/i.test(userAgent)) {
  alert("Windows Phone not Subport Motion");
  btn.style.display = "none";
}

if (/android/i.test(userAgent)) {
  btn.style.display = "none";
  Orientation();
}

// iOS detection from: http://stackoverflow.com/a/9039885/177710
if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  btn.style.display = "block";
  // IOS Function
  function getAccel() {
    DeviceMotionEvent.requestPermission().then((response) => {
      if (response == "granted") {
        btn.style.display = "none";
        Orientation();
      }
    });
  }
}

function Orientation() {
  window.addEventListener("deviceorientation", (e) => {
    const leftToRight = e.gamma;
    vx = vx + leftToRight * updateRate;
    px = px + vx * 0.5;
    console.log(px);
    if (px > 98 || px < 0) {
      px = Math.max(0, Math.min(98, px));
      vx = 0;
    }
    smoke.style.transform = `translateX(${px / 1.5}px)`;
    sunSplash.style.transform = `translateX(${px / 3}px)`;
  });
}
