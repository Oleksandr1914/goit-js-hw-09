const getEl = x => document.querySelector(x);

const startBtn = getEl('[data-start]');
const stopBtn = getEl('[data-stop]');

startBtn.addEventListener('click', startRundomColor);

function startRundomColor() {
  if (startBtn.classList.contains('rundomColor')) {
    return;
  }
  startBtn.classList.add('rundomColor');

  const timerId = setInterval(function () {
    getEl('body').style.backgroundColor = getRandomHexColor();
  }, 1000);
  stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.classList.remove('rundomColor');
  });
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
