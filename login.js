/* java3.js */
/* Funktioner för hantering av inloggningsformuläret och säkerhet */
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

//////////////
window.onload = function() {
    // Uppdatera CAPTCHA-bilden vid klick
    const captchaImage = document.getElementById('captcha-image');
    captchaImage.addEventListener('click', function() {
        this.src = '/captcha?' + Date.now(); // Lägg till en tidsstämpel för att få en ny bild
    });

    // Förhindra att formuläret skickas om vid omladdning
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    // Validera formuläret innan inlämning
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const captcha = document.getElementById('captcha').value.trim();

        if (!username || !password || !captcha) {
            alert('Alla fält är obligatoriska.');
            event.preventDefault();
        }
    });
}
