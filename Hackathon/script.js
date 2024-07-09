document.getElementById('vendorSignupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const businessName = document.getElementById('businessName').value;
    const services = document.getElementById('services').value;


    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Business Name:', businessName);
    console.log('Services:', services);

   
});
