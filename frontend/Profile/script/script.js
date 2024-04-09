/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Collect form data
        let formData = new FormData(this);
        
        // Validate form data (you can add custom validation logic here)
        let name = formData.get('name');
        let email = formData.get('email');
        let message = formData.get('message');
        
        if (!name || !email || !message) {
            document.getElementById('status').innerText = 'Please fill in all fields.';
            return;
        }
        
        // Send form data to the server (replace 'save_data.php' with your server-side script)
        fetch('save_data.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('status').innerText = 'Form submitted successfully.';
            } else {
                throw new Error('Form submission failed.');
            }
        })
        .catch(error => {
            console.error(error);
            document.getElementById('status').innerText = 'An error occurred while submitting the form.';
        });
    });
});
