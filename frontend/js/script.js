/* eslint-disable no-undef */
// Fetch data from the backend
fetch('http://localhost:8080/api/posts')
.then(response => response.json())
.then(data => {
    // Process the data and update the UI
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});

document.addEventListener('DOMContentLoaded', function() {
// Add event listeners to the buttons
document.getElementById('likeBtn').addEventListener('click', function() {
    console.log('Like button clicked');
    // Add your logic here
});

document.getElementById('commentBtn').addEventListener('click', function() {
    console.log('Comment button clicked');
    // Add your logic here
});

document.getElementById('shareBtn').addEventListener('click', function() {
    console.log('Share button clicked');
    // Add your logic here
});

document.getElementById('bookmarkBtn').addEventListener('click', function() {
    console.log('Bookmark button clicked');
    // Add your logic here
});
});