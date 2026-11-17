const vid = document.querySelector("video");
let timerId = null;
let startTime = null;
let endTime = null;
const loopsInput = document.createElement("input");
loopsInput.type = "number";
loopsInput.min = "1";
loopsInput.value = "3";
document.body.append(loopsInput);
loopsInput.style.position = "fixed";
loopsInput.style.top = "140px";
loopsInput.style.left = "20px";
loopsInput.style.zIndex = "9999";
 
makeButton("Set Start", "60px", () => {startTime = vid.currentTime})
makeButton("Set End", "80px", () => {endTime = vid.currentTime})
makeButton("Start Playing", "100px", () => {startLoop(startTime, endTime, Number(loopsInput.value))})
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
  
  if (A === null || B === null){
    alert("Put start and end time before playing")
    return
  }

  if (A >= B){
    alert("End time must be after start time")
    return
  }

  if (!Number.isInteger(N) || N < 1){
    alert("Enter a valid number of loops")
    return
  }

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