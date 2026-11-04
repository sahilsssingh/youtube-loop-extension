const vid = document.querySelector("video");
let timerId = null;
let startTime = null;
let endTime = null;
let playNumber = Number(prompt("How many times should the part play?"));
 
makeButton("Set Start", "60px", () => {startTime = vid.currentTime})
makeButton("Set End", "80px", () => {endTime = vid.currentTime})
makeButton("Start Playing", "100px", () => {startLoop(startTime, endTime, playNumber)})
makeButton("Stop Playing", "120px", () => {stopLoop()})

function makeButton(label, top, onClick){
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.addEventListener("click", onClick);
  btn.style.position = "fixed";
  btn.style.top = top;
  btn.style.left = "20px";
  btn.style.zIndex = "9999";
  document.body.append(btn);
}

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