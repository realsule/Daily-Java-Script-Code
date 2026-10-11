const bookingForm = document.getElementById('bookingForm');
const paymentForm = document.getElementById('paymentForm');

let bookingData = [];

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const platform = document.getElementById('platform').value;

    bookingData.push({ name, email, service, platform });

    // Redirect to respective platform
    if (platform === 'whatsapp') {
        window.location.href = `https://wa.me/1234567890?text=${encodeURIComponent(`Hello, I am interested in booking ${service} service. My name is ${name} and my email is ${email}.`)}`;
    } else if (platform === 'instagram') {
        window.location.href = `https://www.instagram.com/messages/new/username/?text=${encodeURIComponent(`Hello, I am interested in booking ${service} service. My name is ${name} and my email is ${email}.`)}`;
    } else if (platform === 'linkedin') {
        window.location.href = `https://www.linkedin.com/messages/new/username/?text=${encodeURIComponent(`Hello, I am interested in booking ${service} service. My name is ${name} and my email is ${email}.`)}`;
    }
});

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (paymentMethod === 'crypto') {
        // Simulate crypto payment process
        alert('Please send ' + amount + ' to the provided address.');
    } else if (paymentMethod === 'mpesa') {
        // Simulate M-Pesa payment process
        alert('Please send ' + amount + ' through M-Pesa to the provided number.');
    }
});
