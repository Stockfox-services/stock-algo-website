// server.js
const express = require('express');
const app = express();
const port = 7700;
app.set('view engine', 'view);
app.set('views', path.join(__dirname, 'assets'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running at 'http://localhost:7700');
});