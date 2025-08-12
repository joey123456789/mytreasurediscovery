
// Simple form guard: ensure at least one contact method.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#booking-form');
  form?.addEventListener('submit', (e) => {
    const phone = form.querySelector('input[name="phone"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    if (!phone && !email) {
      e.preventDefault();
      alert('Please include at least a phone number or email so we can reach you.');
    }
  });
});
