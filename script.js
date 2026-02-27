let fliesEaten = 0;
// A fun "slurp" or "pop" sound
const slurpSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2301/2301-preview.mp3');

function catchFly() {
    const frog = document.getElementById('frog');
    const tongue = document.getElementById('tongue');
    const fly = document.getElementById('fly');
    const counter = document.getElementById('counter');

    if (frog.classList.contains('jump')) return;

    // 1. Play Sound & Hop
    slurpSound.currentTime = 0;
    slurpSound.play();
    frog.classList.add('jump');
    
    // 2. Tongue Action
    tongue.classList.add('shoot-tongue');
    fly.style.opacity = '0'; // Fly gets eaten!

    // 3. Score
    fliesEaten++;
    counter.innerText = "Flies Eaten: " + fliesEaten;

    // 4. Reset after the hop
    setTimeout(() => {
        frog.classList.remove('jump');
        tongue.classList.remove('shoot-tongue');
        fly.style.opacity = '1'; // A new fly appears!
