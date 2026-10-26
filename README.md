# YouTube Loop Extension

Problem: YouTube has no built-in way to repeat one part of a video.
Users: Music listeners replaying a favorite part; students replaying a
hard part of a lesson.

MVP:
- Set A: saves the current video time as the start (clicking again replaces it)
- Set B: saves the current time as the end
- Loops: user enters how many times to repeat
- Start loop: repeats A to B, then the video continues playing
- Stop: cancels the running loop; the video keeps playing
- Controls appear on the YouTube page, under the player

Out of scope (for now): saved loops, keyboard shortcuts, playback speed,
typing times by hand.

Tech: plain JavaScript, Chrome extension, on-page controls.