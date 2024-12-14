const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Show the menu on mouseover
hamburger.addEventListener('mouseover', () => {
    menu.classList.add('active');
});

// Keep the menu open as long as the mouse is on the menu
menu.addEventListener('mouseover', () => {
    menu.classList.add('active');
});

// Hide the menu when the mouse leaves both the hamburger and the menu
hamburger.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!menu.matches(':hover')) {
            menu.classList.remove('active');
        }
    }, 100); // Slight delay to prevent flicker
});

menu.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!hamburger.matches(':hover')) {
            menu.classList.remove('active');
        }
    }, 100); // Slight delay to ensure user interaction is complete
});

///////////////////////////////
// JavaScript for Resume Upload Page

// Select form and inputs
const uploadForm = document.querySelector('.upload-form');
const resumeInput = document.getElementById('resume');
const descriptionInput = document.getElementById('description');

// Event listener for form submission
uploadForm.addEventListener('submit', function (event) {
    // Check if the uploaded file is a PDF
    const file = resumeInput.files[0];
    if (!file || file.type !== 'application/pdf') {
        alert('Please upload a valid PDF file.');
        event.preventDefault(); // Stop form submission
        return;
    }

    // Check if description is not empty
    if (descriptionInput.value.trim() === '') {
        alert('Please write a description about yourself.');
        event.preventDefault(); // Stop form submission
        return;
    }

    // Confirmation alert
    const confirmation = confirm('Are you sure you want to submit this form?');
    if (!confirmation) {
        event.preventDefault(); // Stop form submission
    }
});
