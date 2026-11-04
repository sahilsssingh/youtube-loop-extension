const vid = document.querySelector("video");
let timerId = null;
let startTime = null;
let endTime = null;
let playNumber = Number(prompt("How many times should the part play?"));
 

const startBtn = document.createElement("button");
startBtn.textContent = "Set Start";
startBtn.addEventListener("click", () => {startTime = vid.currentTime});
startBtn.style.position = "fixed";
startBtn.style.top = "60px";
startBtn.style.left = "20px";
startBtn.style.zIndex = "9999";
document.body.append(startBtn);

const endBtn = document.createElement("button");
endBtn.textContent = "Set End"
endBtn.addEventListener("click", () => {endTime = vid.currentTime});
endBtn.style.position = "fixed";
endBtn.style.top = "80px";
endBtn.style.left = "20px";
endBtn.style.zIndex = "9999";
document.body.append(endBtn);

const startPlaying = document.createElement("button");
startPlaying.textContent = "Start Playing"
startPlaying.addEventListener("click", () => {startLoop(startTime, endTime, playNumber)})
startPlaying.style.position = "fixed";
startPlaying.style.top = "100px";
startPlaying.style.left = "20px";
startPlaying.style.zIndex = "9999";
document.body.append(startPlaying);

function startLoop(A, B, N) {
  stopLoop();
  vid.currentTime = A;

  timerId = setInterval(() => {
    if (vid.currentTime >= B) {
      N--;
      if (N > 0) {
        vid.currentTime = A;
      } else {
        stopLoop();
      }
    }
  }, 50);
}

function stopLoop() {
  clearInterval(timerId);
}