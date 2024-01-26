const form = document.querySelector('form');
const thankyoupage = document.querySelector('.thank-you');
const dismissBtn = document.querySelector('.dismiss-btn');
const emailInput = document.querySelector('input-email');
const emailDisplay = document.querySelector('b');
const cardContainer = document.querySelector('.card-container');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const emailInput = document.querySelector('input[type="email"]');
  const emailDisplay = document.querySelector('.thank-you-text b');

  if (emailInput.value === '') {
    alert('Please provide a valid email address');
    return;
  }

  emailDisplay.textContent = emailInput.value; // Display email in thank you message
  thankyoupage.style.display = 'flex'; // Show thank you message
  cardContainer.style.display = 'none'; // Hide form
  form.reset(); // Empty the form
});

dismissBtn.addEventListener('click', function() {
  thankyoupage.style.display = 'none'; // Hide thank you message
  cardContainer.style.display = 'flex'; // Show form
})