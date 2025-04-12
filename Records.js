// Show/hide details when clicking a record
document.querySelectorAll('.record-card').forEach(card => {
  card.addEventListener('click', () => {
    const details = card.querySelector('.record-details');
    const isVisible = details.style.display === 'block';
    document.querySelectorAll('.record-details').forEach(d => d.style.display = 'none');
    details.style.display = isVisible ? 'none' : 'block';
  });
});

// Filter records
document.getElementById('recordFilter').addEventListener('change', function () {
  const filter = this.value.toLowerCase();
  document.querySelectorAll('.record-card').forEach(card => {
    const type = card.getAttribute('data-type').toLowerCase();
    if (filter === 'all' || type === filter) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Animate cards on page load
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.record-card');
  cards.forEach((card, i) => {
    setTimeout(() => card.style.opacity = 1, i * 100);
  });
});
