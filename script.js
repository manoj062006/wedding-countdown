// Set the wedding date here (Update this when needed)
const weddingDate = new Date('May 15, 2025 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    document.querySelector('.countdown').innerHTML = '<h2>We are married!</h2>';
    document.querySelector('.total-countdown').innerHTML = '';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const totalSeconds = Math.floor(distance / 1000);
  const totalMinutes = Math.floor(distance / (1000 * 60));
  const totalHours = Math.floor(distance / (1000 * 60 * 60));

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  document.getElementById('total-seconds').textContent = totalSeconds;
  document.getElementById('total-minutes').textContent = totalMinutes;
  document.getElementById('total-hours').textContent = totalHours;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
