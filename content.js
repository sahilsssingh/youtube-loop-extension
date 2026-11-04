const vid = document.querySelector("video");
let timerId = null;

if (vid != null) {
  startLoop(10, 20, 5);
}

function startLoop(A, B, N) {
  stopLoop();

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