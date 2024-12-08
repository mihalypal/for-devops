const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.render('index', { title: 'DevOps alapanyag' });
});

// Define a route for the game page
app.get('/game', (req, res) => {
  res.render('game', { title: 'Tic-Tac-Toe' });
});

// Start the server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
} else {
  module.exports = app;
}