const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

// Load the private key from your file system
const privateKey = fs.readFileSync(path.resolve(__dirname, '../../../AuthKey_V5HX3QL2R3.p8'));

// Function to generate the developer token
function generateDeveloperToken() {
  const payload = {
    iss: 'D989JLJWGD',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 157770,
    //origin: ["https://yourdomain.com"]
  };
  
  const token = jwt.sign(payload, privateKey, {
    algorithm: 'ES256',
    keyid: 'V5HX3QL2R3'  // Your Key ID
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