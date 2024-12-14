// script.js

// Select the hamburger and menu elements
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


// Funktion för att ladda listan över jobbsökare
window.onload = function() {
    fetch('/get-job-seekers')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('job-seekers');
        data.forEach(seeker => {
            const card = document.createElement('div');
            card.classList.add('seeker-card');
            card.innerHTML = `
                <h3>${seeker.username}</h3>
                <p>${seeker.short_description}</p>
                <a href="profile.html?user=${seeker.username}" class="btn-mer">Mer</a>
                <a href="form.html?user=${seeker.username}" class="btn-kontakt">Kontakt</a>
            `;
            container.appendChild(card);
        });
    });
}
