function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return; //stop function from running
	audio.currentTime = 0 // rewind audio
	audio.play();
	key.classList.add("playing"); // add a class "playing" to "key". also .remove, .toggle
}

function removeTransition(e){
	if(e.propertyName !== 'transform') return; //skip if it is not a transform
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);