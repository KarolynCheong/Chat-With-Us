document.addEventListener('DOMContentLoaded', function() {
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');

    document.getElementById('outputName').textContent = `Name: ${name}`;
    document.getElementById('outputEmail').textContent = `Email: ${email}`;
  });

    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name'); 
    const email = urlParams.get('email'); 

  document.getElementById('outputName').innerText = name;
  document.getElementById('outputEmail').innerText = email;


  function displayBookingDetails() {
    const name = document.getElementById('outputName').innerText;
    const email = document.getElementById('outputEmail').innerText;
    const interviewType = document.getElementById('interviewtype').value;
    const interviewDate = document.getElementById('interviewdate').value;

 
    const bookingDetailsContainer = document.createElement('div');
    bookingDetailsContainer.classList.add('booking-container');

    const details = `
    <h2 class="booking-title">Booking Details</h2>
    <p><strong class="name-label"></strong> <span class="name">${name}</span></p>
    <p><strong class="email-label"></strong> <span class="email">${email}</span></p>
    <p><strong class="interview-type-label">Interview Stage:</strong> <span class="interview-type">${interviewType}</span></p>
    <p><strong class="interview-date-label">Date:</strong> <span class="interview-date">${interviewDate}</span></p>
    ` ;
}


