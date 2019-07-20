function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (audio) {
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add("playing");
  }
}

function removeTransition(e) {
  // check if it contains a transform property
  if (e.propertyName === "transform") {
    this.classList.remove("playing");
  }
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);