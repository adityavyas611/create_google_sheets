const fs = require('fs');
const authorize = require('./auth');
const createSheet = require('./createSheet');

fs.readFile("credentials.json", (err, content) => {
  if (err) return console.log("Error loading client secret file:", err);
  authorize(JSON.parse(content), createSheet);
});