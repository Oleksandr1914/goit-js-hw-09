import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const getEl = x => document.querySelector(x);
const btn = getEl('[data-start]');
const daysEl = getEl('[data-days]');
const hoursEl = getEl('[data-hours]');
const minutesEl = getEl('[data-minutes]');
const secondsEl = getEl('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();
    if (date.getTime() > selectedDates[0].getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }

    btn.classList.add('isAcctive');
    btn.addEventListener('click', startTimer);

    function startTimer() {
      btn.disabled = true;
      let calc = 1000;
      const timerId = setInterval(() => {
        const objTime = convertMs(
          selectedDates[0].getTime() - new Date().getTime()
        );
        calc = selectedDates[0].getTime() - new Date().getTime();
        daysEl.textContent = objTime.days;
        hoursEl.textContent = objTime.hours;
        minutesEl.textContent = objTime.minutes;
        secondsEl.textContent = objTime.seconds;
        if (calc < 500) {
          clear();
        }
      }, 1000);
      function clear() {
        clearInterval(timerId);
      }
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

function pad(number) {
  return String(number).padStart(2, '0');
}
