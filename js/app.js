//Movement Animation
const body = document.querySelector("body");
const smoke = document.querySelector(".smoke");
const sunSplash = document.querySelector(".sun-splash");
const btn = document.querySelector(".btn");
const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i);
// desktop
const speedSmoke = 15;
const rotateSunSplashRate = 7;

if (isMobile == null) {
  body.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 270;
    smoke.style.transform = `translateX(${xAxis * -speedSmoke}px)`;
    sunSplash.style.transform = `translateX(${xAxis * -rotateSunSplashRate}px)`;
  });
}

// mobile;
let px = 0; // Position x and y
let vx = 0; // Velocity x and y

const updateRate = 1 / 45; // หน่วงการเคลื่อนที่

Orientation();
if (/android/i.test(isMobile)) {
  btn.style.display = "none";
  Orientation();
}
if (/iPad|iPhone|iPod/.test(isMobile) && !window.MSStream) {
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
    console.log(vx);
    px = px + vx / 4;
    if (px > 120 || px < -120) {
      px = Math.max(-120, Math.min(120, px));
      console.log(px);
      vx = 0;
    }
    smoke.style.transform = `translateX(${px / 1.5}px)`;
    sunSplash.style.transform = `translateX(${px / 3}px)`;
  });
}
