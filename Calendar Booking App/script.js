var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function submitForm() {
  const nameInput = document.getElementById('nameInput').value;
  const emailInput = document.getElementById('emailInput').value;
  const positionSelect = document.getElementById('Position');
  const selectedPosition = positionSelect.value;

  if (selectedPosition && emailInput.includes('@')) {
    sessionStorage.setItem('selectedPosition', selectedPosition);
    sessionStorage.setItem('name', nameInput);
    sessionStorage.setItem('email', emailInput);

    window.location.href = './Booking/Booking.html';
} else {
    if (!selectedPosition) {
        alert('Please select a position.');
    } else {
        alert('Please enter a valid email address.');
    }
}
}