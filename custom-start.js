const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, 'index.html');
const publicIndexPath = path.resolve(__dirname, 'public', 'index.html');

fs.copyFile(publicIndexPath, indexPath, (err) => {
  if (err) throw err;
  console.log('index.html copied to root folder');
});

// Start the react-scripts
require('react-scripts/scripts/start');
