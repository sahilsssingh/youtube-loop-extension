const vid = document.querySelector("video");
let timerId = null;
let startTime = null;
let endTime = null;

const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.gap = "8px";
buttonContainer.style.position = "fixed";
buttonContainer.style.zIndex = "9999";
document.body.append(buttonContainer);

makeButton("Set Start", () => {startTime = vid.currentTime})
makeButton("Set End", () => {endTime = vid.currentTime})
makeButton("Start Playing", () => {startLoop(startTime, endTime, Number(loopsInput.value))})
makeButton("Stop Playing", () => {stopLoop()})

const loopsInput = document.createElement("input");
loopsInput.type = "number";
loopsInput.min = "1";
loopsInput.value = "3";
buttonContainer.append(loopsInput);

function makeButton(label, onClick){
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.addEventListener("click", onClick);
  buttonContainer.append(btn);
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