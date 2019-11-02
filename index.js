const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('A simple nodejs app to test setting up ci with Travis');
});

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

module.exports.server;
