let vid = null;
let moviePlayer = null;
let timerId = null;
let startTime = null;
let endTime = null;

function createPanel(){
  vid = document.querySelector("video");
  moviePlayer = document.querySelector("#movie_player");

  if (vid === null || moviePlayer === null){
    return
  }

  if (moviePlayer.querySelector(".ytLoop-panel")){
    return
  }

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "ytLoop-panel";
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "10px";
  buttonContainer.style.position = "absolute";
  buttonContainer.style.left = "12px";
  buttonContainer.style.bottom = "80px";
  buttonContainer.style.zIndex = "9999";
  moviePlayer.append(buttonContainer);

  makeButton("Set Start", () => {startTime = vid.currentTime}, buttonContainer)
  makeButton("Set End", () => {endTime = vid.currentTime}, buttonContainer)

  const loopsInput = document.createElement("input");
  loopsInput.type = "number";
  loopsInput.min = "1";
  loopsInput.value = "3";
  buttonContainer.append(loopsInput);

  loopsInput.addEventListener("keydown", (event) => {event.stopPropagation()});

  makeButton("Start Playing", () => {startLoop(startTime, endTime, Number(loopsInput.value))}, buttonContainer)
  makeButton("Stop Playing", () => {stopLoop()}, buttonContainer)
}

function makeButton(label, onClick, buttonContainer){
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

function onNavigation(){
  stopLoop();
  startTime = null;
  endTime = null;
  createPanel();
}

document.addEventListener("yt-navigate-finish", onNavigation);