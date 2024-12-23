// Countdown Timer Logic
const eventDate = new Date("2025-01-25T00:00:00").getTime(); // Set your event date

function updateTimer() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  }
}

// Scroll Effect Logic
const timerSection = document.querySelector(".timer-section");

window.addEventListener("scroll", () => {
  const sectionTop = timerSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight) {
    timerSection.classList.add("visible");
  }
});

// Update Timer Every Second
setInterval(updateTimer, 1000);


//view events
document.getElementById('view-events').addEventListener('click', function () {
    document.getElementById('eve').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.getElementById('footer').addEventListener('click', function () {
    document.getElementById('foot').scrollIntoView({
      behavior: 'smooth'
    });
  });

  