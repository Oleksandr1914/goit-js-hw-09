const getEl = x => document.querySelector(x);

const delayEl = getEl('[name="delay"]');
const stepEl = getEl('[name="step"]');
const amountEl = getEl('[name="amount"]');

getEl('.form').addEventListener('submit', event => {
  let inDelay = +delayEl.value;

  event.preventDefault();

  for (let i = 1; i <= amountEl.value; i += 1) {
    createPromise(i, inDelay)
      .then(fulfilled => {
        console.log(fulfilled);
      })
      .catch(rejected => {
        console.log(rejected);
      });
    inDelay += +stepEl.value;
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
