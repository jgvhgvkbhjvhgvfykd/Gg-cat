const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Serve your HTML file
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle password submission
app.post('/submit-password', (req, res) => {
  const { password } = req.body;
  console.log('Password received:', password);
  // You can save the password to a file, database, etc.
  res.send('Password received!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
