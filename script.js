document.addEventListener('DOMContentLoaded', function() {
    alert('Welcome to My Awesome Site!');
    
    const welcomeButton = document.getElementById('welcomeButton');
    welcomeButton.addEventListener('click', function() {
        alert('Thanks for visiting! Have a great day!');
    });

    const myLink = document.querySelector('a[href="https://www.bokosfirstwebsite.com"]');
    myLink.addEventListener('click', function() {
        console.log('Link to Boko\'s First Website was clicked');
    });
});
