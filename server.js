const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import routes
const animeRoutes = require('./src/routes/animeRoutes');

// Middleware to handle JSON
app.use(express.json());

// API routes
app.use('/anime', animeRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
