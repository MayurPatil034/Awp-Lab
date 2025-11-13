const btn = document.getElementById('btn');
const message = document.getElementById('message');
let clicks = 0;

btn.addEventListener('click', () => {
    clicks++;
    message.textContent = `Button clicked ${clicks} time${clicks !== 1 ? 's' : ''}!`;
});