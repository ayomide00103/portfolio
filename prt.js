document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      const formMessage = `Thank you, ${name}! I will get back to you at ${email} shortly.`;
      document.getElementById('formMessage').innerText = formMessage;
  
      // Reset the form
      document.getElementById('contactForm').reset();
    } else {
      document.getElementById('formMessage').innerText = 'Please fill out all fields.';
    }
  });
  