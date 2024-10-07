// You can add any JavaScript you want to use for animations or interactivity here.
// For example, a simple alert when the contact form is submitted.

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
});
