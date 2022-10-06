// Select the html time holders
const monthElement = document.querySelector('.month');
const dayElement = document.querySelector('.day');
const hourElement = document.querySelector('.hour');
const minElement = document.querySelector('.min');
const secElement = document.querySelector('.sec');

// Set the time values:
const sec = 1000;
const min = sec * 60;
const hour = min * 60;
const day = hour * 24;
const month = day * 30;

// SET THE TARGET DATE
let targetDate = new Date('oct 13, 2022 21:00:00');
//////////////////

setInterval(() => {
  // Get the time gap between target date and currant date:
  let timeGap = targetDate - new Date().getTime();

  // Calculate the time gap units
  const textMonth = Math.floor(timeGap / month);
  const textDay = Math.floor((timeGap % month) / day);
  const textHour = Math.floor((timeGap % day) / hour);
  const textMin = Math.floor((timeGap % hour) / min);
  const textSec = Math.floor((timeGap % min) / sec);

  // Replace html timers elements value with actual time
  monthElement.innerHTML = textMonth;
  dayElement.innerHTML = textDay;
  hourElement.innerHTML = textHour;
  minElement.innerHTML = textMin;
  secElement.innerHTML = textSec;

  if (targetDate < new Date().getTime()) {
    document.getElementById('theTimer').classList.add('hide');
    document.getElementById('theTitle').classList.add('hide');
    document.getElementById('theRes').classList.remove('hide');
    document.querySelector('.celebBox').classList.remove('hide');
  }
}, 1000);
