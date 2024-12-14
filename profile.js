// Funktion för att ladda jobbsökarens profil
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
///////////////////////////
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('user');
    
    fetch(`/get-job-seeker-profile?user=${username}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('h2').textContent = data.username;
        document.querySelector('p').textContent = data.description;
        document.querySelector('a').href = data.cv_url;
    });
}
