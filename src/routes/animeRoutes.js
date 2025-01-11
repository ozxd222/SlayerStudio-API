const express = require('express');
const router = express.Router();

// Import controllers
const animeController = require('../controllers/animeController');

// Route for getting all anime data
router.get('/', animeController.getAllAnimes);

// Route for getting specific anime by name
router.get('/:name', animeController.getAnimeByName);

// Route for getting episodes of a specific anime
router.get('/:name/episodes', animeController.getEpisodesByAnimeName);

module.exports = router;
