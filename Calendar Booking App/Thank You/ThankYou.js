document.addEventListener('DOMContentLoaded', function() {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const interviewType = localStorage.getItem('interviewType');
  const interviewDate = localStorage.getItem('interviewDate');

  const bookingDetailsDiv = document.getElementById('bookingDetails');
  if (bookingDetailsDiv) {
  bookingDetailsDiv.innerHTML = `
  <img src="../images/Thankyoupage.png"alt="thankyouimage">
  <p> An email confirmation will be sent to you when the interview invite is accepted. You may view your booking details below.
  <h2>Booking Details</h2>
  <p>${name}</p>
  <p>${email}</p>
  <p>Interview Type: ${interviewType}</p>
  <p>Interview Date: ${interviewDate}</p>
`;
 }
});
