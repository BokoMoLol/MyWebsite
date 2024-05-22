document.addEventListener('DOMContentLoaded', function() {
    alert('Welcome to My Awesome Site!');
    
    const welcomeButton = document.getElementById('welcomeButton');
    welcomeButton.addEventListener('click', function() {
        alert('Thanks for visiting! Have a great day!');
    });
});
