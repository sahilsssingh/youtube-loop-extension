# YouTube Loop Extension

A Chrome extension that loops a chosen part of a YouTube video.

**Problem:** YouTube has no built-in way to repeat one part of a video.
**Users:** Music listeners replaying a favorite part, and students
replaying a hard part of a lesson.

## Features (v1)
- **Set Start / Set End:** saves the video's current time as the start or
  end of the loop (clicking again replaces it).
- **Play count box:** how many times the part should play (the first play
  counts).
- **Start Playing:** jumps to the start and plays the part that many
  times, then the video keeps playing.
- **Stop Playing:** cancels a running loop; the video keeps playing.
- **Input checks:** the start and end must be set, the end must come
  after the start, and the count must be a whole number of at least 1. An
  invalid click does not stop a loop that is already running.
- Controls appear inside the video player, at the bottom left, and keep
  working as you move between videos.

## Roadmap
- Saved loops: named loops per video
- Keyboard shortcuts
- Typing times by hand

## How it works
A content script runs on YouTube pages, adds the controls to the player,
and checks the video's time every 50 ms to jump back to the start.
It listens for YouTube's page-change event so the controls appear after
navigating between videos.

**Tech:** plain JavaScript, Chrome extension (Manifest V3), on-page
controls injected into the YouTube player.

## Known behavior
- Clicking a timestamp in a video's comments or description while a loop
  is running seeks within the same video. If the timestamp is after the
  end point, the video jumps back to the start of the loop. Press Stop to
  leave the loop.
- Changing to another video stops any running loop and clears the saved
  start and end times. The number of plays in the box is kept.