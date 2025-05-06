const audio = document.getElementById("audio");
const playPause = document.getElementById("playPause");
const seekBar = document.getElementById("seekBar");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

playPause.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPause.textContent = "Pause";
  } else {
    audio.pause();
    playPause.textContent = "Play";
  }
});

audio.addEventListener("loadedmetadata", () => {
  seekBar.max = audio.duration;
  duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  seekBar.value = audio.currentTime;
  currentTime.textContent = formatTime(audio.currentTime);
});

seekBar.addEventListener("input", () => {
  audio.currentTime = seekBar.value;
});

function formatTime(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}