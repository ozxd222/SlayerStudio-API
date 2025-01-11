// Example data - Aap isse file se dynamically fetch kar sakte hain ya database mein store kar sakte hain.
const animes = [
  {
    name: "Demon Lord 2099",
    description: "A popular anime about ninjas",
    banner: "https://ibb.co/s6rMyYT",
    episodes: [
      {
        episodeNumber: 1,
        title: "Demon Lord 2099 - Episode 1",
        videoLink: "https://drive.google.com/uc?id=1dxV8AYOP-uJhdVVQdUID5w7eRFNr4Z69",
        description: "CyberPunk City Shinjuku."
      },
      {
        episodeNumber: 2,
        title: "Demon Lord 2099 - Episode 2",
        videoLink: "https://drive.google.com/uc?id=YOUR_FILE_ID_2",
        description: "The Demon Lord And His Vessel"
      },
    ]
  },
  // More anime objects...
];

// Get all anime
exports.getAllAnimes = (req, res) => {
  res.json(animes);
};

// Get anime by name
exports.getAnimeByName = (req, res) => {
  const { name } = req.params;
  const anime = animes.find(a => a.name.toLowerCase() === name.toLowerCase());
  
  if (anime) {
    res.json(anime);
  } else {
    res.status(404).json({ message: 'Anime not found' });
  }
};

// Get episodes by anime name
exports.getEpisodesByAnimeName = (req, res) => {
  const { name } = req.params;
  const anime = animes.find(a => a.name.toLowerCase() === name.toLowerCase());
  
  if (anime) {
    res.json(anime.episodes);
  } else {
    res.status(404).json({ message: 'Episodes not found' });
  }
};
