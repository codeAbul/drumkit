document.addEventListener("keyup", playTheAudio);

function playTheAudio(event: KeyboardEvent, { target } = event) {
  if (target instanceof HTMLElement) {
    let keyPressed = event.key;
    let relAudioEl = document.querySelector(`audio[data-key = ${keyPressed}`);
    let relKeyEl = document.querySelector(`div[data-key=${keyPressed}]`);
    relKeyEl.addEventListener("transitionend", stopTheAudio);
    let currentClassList = Array.from(relKeyEl.classList);
    relKeyEl.classList.add(`${currentClassList[0]}__clicked`);
    if (relAudioEl instanceof HTMLAudioElement) {
      relAudioEl.currentTime = 0;
      relAudioEl.play();
    }
  }
}
function stopTheAudio(event: TransitionEvent, { target } = event) {
  if (event.propertyName != "transform" && target instanceof HTMLElement) {
    target.classList.remove(`keypanel--key__clicked`);
  }
}
