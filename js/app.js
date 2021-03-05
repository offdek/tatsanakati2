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
// Android Function
console.log("isMobile", isMobile);
if (/android/i.test(isMobile)) {
  btn.style.display = "none";
  Motion();
}

// IOS Function
if (/iPad|iPhone|iPod/.test(isMobile) && !window.MSStream) {
  btn.style.display = "block";
  function getAccel() {
    DeviceMotionEvent.requestPermission().then((response) => {
      if (response == "granted") {
        btn.style.display = "none";
        Motion();
      }
    });
  }
}

function Motion() {
  window.addEventListener("devicemotion", (e) => {
    const leftToRight = e.accelerationIncludingGravity.x;
    smoke.style.transform = `translateX(${leftToRight * 20 - 90}px)`;
    sunSplash.style.transform = `translateX(${leftToRight * 4}px)`;
  });
}
