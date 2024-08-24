// Handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    if (name && email && message) {
        sendMessage(name, email, message);
    } else {
        alert('Please fill in all fields.');
    }
});

function sendMessage(name, email, message) {
    // Simulate sending a message
    alert(`Thank you, ${name}. Your message has been sent!`);
    document.querySelector('form').reset();
}
