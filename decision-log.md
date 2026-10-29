# Decision Log

## Decision 1: On-page controls instead of a popup
- **Options considered:** Popup, on-page controls. I also considered
  building the popup first and upgrading to on-page controls later, but
  only the looping logic would carry over, the popup UI itself would be
  thrown away.
- **Why I chose this:** I wanted to learn DOM manipulation, and on-page
  controls need much more of it. A popup also closes when the user clicks
  anywhere else, so controls next to the video are friendlier to use.
- **Trade-offs:** Harder to build because I have to fit into YouTube's
  layout and handle its page navigation. Takes more time.

## Decision 2: Plain JavaScript instead of React
- **Options considered:** Plain JavaScript, React
- **Why I chose this:** React hides DOM work, and DOM practice is my main
  learning goal. Plain JavaScript also needs no build tool.
- **Trade-offs:** No React experience from this project, and more manual
  code to write.

## Decision 3: setInterval instead of the timeupdate event
- **Options considered:** timeupdate event, setInterval.
  requestAnimationFrame was also an option, but I left it out: it pauses
  when the tab is hidden, which would break the loop for someone
  listening in another tab.
- **Why I chose this:** Precision matters for looping a song. timeupdate
  can overshoot by about 0.25 seconds, which is audible. setInterval lets
  me choose a shorter check interval.
- **Trade-offs:** I have to stop the timer myself with clearInterval, or
  extra timers can pile up.