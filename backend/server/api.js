const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Load the private key from your file system
const privateKey = fs.readFileSync(path.resolve(__dirname, 'AuthKey_ABC123DEFG.p8'));

// Function to generate the developer token
function generateDeveloperToken() {
  const payload = {
    iss: 'DEF123GHIJ',  // Your Team ID
    iat: Math.floor(Date.now() / 1000),  // Current timestamp
    exp: Math.floor(Date.now() / 1000) + 15777000,  // 6 months expiration
    origin: ["https://yourdomain.com"]  // Optional, to restrict to your domain
  };
  
  const token = jwt.sign(payload, privateKey, {
    algorithm: 'ES256',
    keyid: 'ABC123DEFG'  // Your Key ID
  });
  
  return token;
}

// Route to return the developer token
app.get('/api/apple-music-token', (req, res) => {
  const token = generateDeveloperToken();
  res.json({ token });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});