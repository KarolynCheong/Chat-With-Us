document.addEventListener('DOMContentLoaded', function() {
  const storedPosition = sessionStorage.getItem('selectedPosition');
    if (storedPosition) {
      document.getElementById('displaySelectedPosition').innerText = storedPosition;
    }
  displayBookingDetails();
});

function displayBookingDetails() {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const interviewType = localStorage.getItem('interviewType');
  const interviewDate = localStorage.getItem('interviewDate');
  const selectedTime = localStorage.getItem('selectedTime');

  const bookingDetailsContainer = document.getElementById('bookingDetails');
      if (bookingDetailsContainer) {
        const storedPosition = sessionStorage.getItem('selectedPosition');
        const details = `
          <img src="../images/Thankyoupage.png"alt="thankyouimage">
          <p> An email confirmation will be sent to you when the interview invite is accepted.</p
          <p> You may view your booking details below.</p>
          <h2>Booking Details</h2>
          <p class="name">${name}</p>
          <p class="email">${email}</p>
          <p class="position">Position: ${storedPosition}</p>
          <p class="interviewType">Stage: ${interviewType}</p>
          <p class="interviewDate">Date: ${interviewDate}</p>
          <p class="selectedTime">Time: ${selectedTime}</p>
`;
  bookingDetailsContainer.innerHTML = details;
  }
}
