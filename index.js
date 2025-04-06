// Import the express module
const express = require('express');

// Create an Express app
const app = express();

// Define the port to run the server
const PORT = process.env.PORT || 3000;

// Define a simple route for the home page
app.get('/', (req, res) => {
  res.send('🎉 Welcome to the Birthday Reminder App!');
});

// Start the server and listen on the specified port
//app.listen(PORT, () => {
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

