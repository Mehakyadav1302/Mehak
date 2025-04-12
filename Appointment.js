function submitAppointment(event) {
  event.preventDefault();
  alert("Your appointment has been booked successfully!");
  // You can later replace this with backend integration
  document.querySelector(".appointment-form").reset();
}
function submitAppointment(event) {
  event.preventDefault();
  alert("Your appointment has been booked successfully!");
  // You can later replace this with backend integration
  document.querySelector(".appointment-form").reset();
}
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  reveals.forEach((el) => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}
