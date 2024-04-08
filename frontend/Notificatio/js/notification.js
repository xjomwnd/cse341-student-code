/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Define a function to display notifications
function displayNotification(message) {
    // Create a notification element
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    // Append the notification to the document body
    document.body.appendChild(notification);

    // Automatically remove the notification after a certain duration (e.g., 5 seconds)
    setTimeout(() => {
        notification.remove();
    }, 5000); // Adjust the duration as needed
}

// Example usage:
// Call the displayNotification function with a message
// displayNotification("New notification received!");
