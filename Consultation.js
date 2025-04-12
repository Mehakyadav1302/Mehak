// Slide-in effect for the form on page load
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.consultation-form');
  if (form) {
    form.classList.add('slide-in');
  }
});

// Smooth scroll already handled in HTML button onclick,
// but here's an optional enhancement for any .scroll-to behavior
document.querySelectorAll('button.scroll-to').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submit validation
const form = document.querySelector('.consultation-form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const concern = form.querySelector('#concern').value.trim();
    const mode = form.querySelector('#mode').value;

    if (!name || !concern || !mode) {
      alert("Please fill in all the fields before submitting.");
      return;
    }

    // Simulate submission (you can replace with actual backend code later)
    alert(`Thank you, ${name}! A doctor will connect with you via ${mode} soon.`);

    // Reset form
    form.reset();
  });
}
