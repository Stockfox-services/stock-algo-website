const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Change this to your desired port

// Set up EJS as the view engine
app.set('view engine', 'views');
app.set('views', path.join(__dirname, 'views'));

// Example route to render HTML
app.get('/', (req, res) => {
res.render('index'); // Assuming you have an 'index.ejs' file in the 'views' directory
});

// Serve static files (like CSS, images, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'assets')));

app.listen(port, () => {
  console.log(`Server is running at 'http://localhost:7700');
});