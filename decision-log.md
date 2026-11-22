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

## Decision 4: Restart the loop when Start is clicked again
- **Options considered:** Ignore Start while a loop is running, or
  restart with the new values.
- **Why I chose this:** If the user clicks Start with new values, they
  probably want the new ones. Restart is also one line (stop the old
  timer first), and stopping a timer that isn't running does nothing, so
  I don't need an "is running?" flag that could go out of sync.
- **Trade-offs:** A running loop is replaced without asking.

## Decision 5: Keep a running loop alive if Start is clicked with invalid input
- **Options considered:** Stop the old loop first and then validate, or
  validate first and leave the old loop alone if the input is bad.
- **Why I chose this:** A bad click can be a mistake or a test, and it
  shouldn't wipe out a loop that was working.
- **Trade-offs:** The check must come before stopLoop(), and the user
  needs a message, otherwise nothing seems to happen.

## Decision 6: Controls inside the video player, not below it
- **Options considered:** Popup (already ruled out), a row below the
  video, a panel inside the video player, or inside YouTube's own control
  bar.
- **Why I chose this:** In fullscreen the area below the video isn't
  visible, so controls there can't be reached. Inside the player they work
  in normal, theater, and fullscreen mode, and they follow the video's
  position and size.
- **Trade-offs:** More complex than a row below the video, and the panel
  sits on top of the picture. The control bar is YouTube's own and gets
  re-rendered, so I avoided it.

## Decision 7: Standalone panel at a fixed spot, instead of anchoring to YouTube's elements
- **Options considered:** My own panel at a fixed spot inside the player,
  or attaching it to YouTube's logo and buttons so it moves with them.
- **Why I chose this:** Those elements move and differ between normal and
  fullscreen mode, and they depend on YouTube's internal layout, which
  changes. A standalone panel needs only one placement. I put it at the
  bottom left, just above the progress bar, and it will hide together with
  YouTube's controls so it doesn't leave a gap.
- **Trade-offs:** Its position has to be tuned for each mode, and it won't
  automatically follow YouTube's elements.

## Decision 8: yt-navigate-finish to detect page changes
- **Options considered:** The yt-navigate-finish event, or a
  MutationObserver (polling every second was left out because it wastes
  effort).
- **Why I chose this:** It fires only when YouTube navigates, which is
  exactly when I need it, and it's one line that I can fully understand
  and explain. I tested it by logging every navigation.
- **Trade-offs:** It's an undocumented event, so YouTube could change it.
  MutationObserver is the fallback if that happens.

## Decision 9: Check for the panel's class name on the page, not a variable flag
- **Options considered:** A variable like panelBuilt set to true after
  building, or looking for the panel's own class name on the page.
- **Why I chose this:** A flag only remembers that I built a panel once.
  If YouTube rebuilds the player and the panel is gone, the flag still
  says true and the panel never comes back. Asking the page itself is
  always accurate.
- **Trade-offs:** A small page lookup on each navigation, and I need to
  give the panel a distinctive class name.

## Open questions
- Should the number mean total plays or extra repeats? Currently total
  plays. I'll ask friends and decide after seeing what's less confusing.