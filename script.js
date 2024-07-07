// script.js
let audio = document.getElementById('bday-audio');
let playPauseButton = document.getElementById('play-pause-button');
let okButton = document.getElementById('ok-button');

// Automatically play music when the website loads
audio.play();

// Toggle play/pause button
function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}

// Start music when OK button is clicked
function startMusic() {
    audio.play();
    playPauseButton.textContent = 'Pause';
}