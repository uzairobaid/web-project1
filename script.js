const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close');

// Get the current date
const currentDate = new Date();

// Set the closing date of admission (you can adjust this date as needed)
const closingDate = new Date('2023-07-31');

// Calculate the time difference in milliseconds
const timeDiff = closingDate - currentDate;

// Calculate the number of days left
const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

// Check if admission is closing soon (within 7 days)
if (daysLeft <= 7 && daysLeft >= 0) {
    // Display the popup
    popup.style.display = 'block';
}

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

