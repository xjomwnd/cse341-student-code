/ script.js

// Function to handle form submission
document.getElementById('endpoint-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const endpoint = document.getElementById('endpoint').value;
    const method = document.getElementById('method').value;
    const body = document.getElementById('body').value;

    // Make HTTP request using Axios
    try {
        const response = await axios({
            method: method,
            url: endpoint,
            data: body ? JSON.parse(body) : undefined,
        });

        // Display response in result div
        document.getElementById('result').innerText = JSON.stringify(response.data);
    } catch (error) {
        // Display error message in result div
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
});