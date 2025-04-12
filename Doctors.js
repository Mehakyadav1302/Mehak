// Filter logic
document.getElementById('specialty').addEventListener('change', function () {
  const value = this.value.toLowerCase();
  const cards = document.querySelectorAll('.doctor-card');

  cards.forEach(card => {
    const specialty = card.getAttribute('data-specialty').toLowerCase();
    if (value === 'all' || specialty === value) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Modal logic
function openModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Close modal on background click
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
});

// Filter logic
document.getElementById('specialty').addEventListener('change', function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll('.doctor-card');
  
    cards.forEach(card => {
      const specialty = card.getAttribute('data-specialty').toLowerCase();
      if (value === 'all' || specialty === value) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  
  // Modal logic
  function openModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    if (modal) {
      modal.style.display = 'flex';
    }
  }
  
  function closeModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    if (modal) {
      modal.style.display = 'none';
    }
  }
  
  // Close modal on background click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.style.display = 'none';
    });
  });
  