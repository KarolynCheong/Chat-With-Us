var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function submitForm() {
  const nameInput = document.getElementById('nameInput').value;
  const emailInput = document.getElementById('emailInput').value;

  if (emailInput.includes('@')) {

  sessionStorage.setItem('name', nameInput);
  sessionStorage.setItem('email', emailInput);

  window.location.href = './Booking/Booking.html';
} else {

  alert('Please enter a valid email address.');
  }
}