const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('A simple Nodejs app to practice setting up ci with Travis');
});

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

module.exports.server;
