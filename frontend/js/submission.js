/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
document.getElementById("addTextForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Retrieve the text input value
    // eslint-disable-next-line no-unused-vars
    var text = document.getElementById("textInput").value;
    
    // Perform any actions with the entered text (e.g., add it to a list, send it to the server, etc.)
    
    // Clear the input field
    document.getElementById("textInput").value = "";
  });
  