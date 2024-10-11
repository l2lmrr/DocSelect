document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Gather form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can handle the form submission (e.g., send data to a server)
    console.log('Form submitted:', { name, phone, email, message });

    // Show a success message
    alert('Merci de nous avoir contactés, ' + name + '! Nous vous répondrons bientôt.');
    
    // Clear the form
    document.getElementById('contact-form').reset();
});
