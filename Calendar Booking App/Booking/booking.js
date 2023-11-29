document.addEventListener('DOMContentLoaded', function() {
  const name = sessionStorage.getItem('name');
  const email = sessionStorage.getItem('email');
  const storedPosition = sessionStorage.getItem('selectedPosition');

document.getElementById('outputName').textContent = `Name: ${name}`;
document.getElementById('outputEmail').textContent = `Email: ${email}`;
document.getElementById('displaySelectedPosition').innerText = storedPosition;
});

  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name'); 
  const email = urlParams.get('email'); 

document.getElementById('outputName').innerText = name;
document.getElementById('outputEmail').innerText = email;

document.getElementById('interviewdate').addEventListener('change', function () {
  var selectedDate = this.value;
  var dateComponents = selectedDate.split('-');
  var day = dateComponents[2];

document.getElementById("displayEvenDays").innerHTML = "";
document.getElementById("displayOddDays").innerHTML = "";

  if (day % 2 === 0) {
  displayDropdown("displayEvenDays", ["9am to 10am","10am to 11am","2pm to 3pm", "3pm to 4pm", "4pm to 5pm", "5pm to 6pm"]);
  document.getElementById("displayOddDays").style.display = "none";
  } else {

  displayDropdown("displayOddDays", ["3pm to 4pm", "4pm to 5pm", "5pm to 6pm"]);
  document.getElementById("displayEvenDays").style.display = "none";
  }
  });

function displayDropdown(containerId, options) {
  var labelElement = document.createElement("label");
  labelElement.textContent = "Time: ";

document.getElementById(containerId).appendChild(labelElement);
  var selectElement = document.createElement("select");

options.forEach(function (time) {
  var option = document.createElement("option");
      option.value = time;
      option.text = time;
      selectElement.appendChild(option);
});

document.getElementById(containerId).appendChild(selectElement);
document.getElementById(containerId).style.display = "block";
}

document.getElementById('extractButton').addEventListener('click', function () {
  var selectedDate = document.getElementById('interviewdate').value;
  var selectedTime;

  if (document.getElementById('displayEvenDays').style.display === "block") {
      selectedTime = document.getElementById('displayEvenDays').getElementsByTagName('select')[0].value;
  } else if (document.getElementById('displayOddDays').style.display === "block") {
      selectedTime = document.getElementById('displayOddDays').getElementsByTagName('select')[0].value;
  }

alert("Selected Date: " + selectedDate + "\nSelected Time: " + selectedTime);
prepareAndRedirect(selectedTime);
});

function prepareAndRedirect(selectedTime) {
  const name = document.getElementById('outputName').innerText;
  const email = document.getElementById('outputEmail').innerText;
  const interviewType = document.getElementById('interviewtype').value;
  const interviewDate = document.getElementById('interviewdate').value;

  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('interviewType', interviewType);
  localStorage.setItem('interviewDate', interviewDate);
  localStorage.setItem('selectedTime', selectedTime);

  window.location.href='../Thank You/ThankYou.html';
}

function displayBookingDetails() {
  const name = document.getElementById('outputName').innerText;
  const email = document.getElementById('outputEmail').innerText;
  const interviewType = document.getElementById('interviewtype').value;
  const interviewDate = document.getElementById('interviewdate').value;
  const selectedTime = localStorage.getItem('selectedTime');

  const bookingDetailsContainer = document.createElement('div');
  bookingDetailsContainer.classList.add('booking-container');

  const details = `
  <h2 class="booking-title">Booking Details</h2>
  <p><strong class="name-label"></strong> <span class="name">${name}</span></p>
  <p><strong class="email-label"></strong> <span class="email">${email}</span></p>
  <p><strong class="interview-type-label">Interview Stage:</strong> <span class="interview-type">${interviewType}</span></p>
  <p><strong class="interview-date-label">Date:</strong> <span class="interview-date">${interviewDate}</span></p>
  <p><strong class="interview-time-label">Time:</strong> <span class="interview-time">${selectedTime}</span></p>
  ` ;
}

