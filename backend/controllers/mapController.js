const Map = require("./../models/mapModel");

exports.getMapByPosition = async (req, res) => {
  try {
    const position = parseInt(req.params.position, 10) - 1;

    if (isNaN(position) || position < 0) {
      return res.status(400).json({ message: "Invalid position parameter" });
    }

    const map = await Map.findOne().skip(position).exec();

    if (!map) {
      return res.status(404).json({ message: "Map not found" });
    }

    res.status(200).json({ status: "success", map });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving map", error });
  }
};

exports.getAllMaps = async (req, res) => {
  try {
    const maps = await Map.find();

    if (!maps) {
      return res.status(404).json({ message: "Maps not found" });
    }

    res.status(200).json({ status: "success", maps });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving map", error });
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const mapName = req.params.mapName;
    const map = await Map.findOne({ name: mapName });

    if (!map) {
      return res.status(404).json({ message: "Map not found" });
    }

    if (!map.highscores) {
      map.highscores = [];
    }

    res.status(200).json({
      status: "success",
      data: {
        leaderboard: map.highscores,
      },
    });
  } catch (err) {
    console.error("Error fetching leaderboard:", err);
    res.status(500).json({ message: "Error fetching leaderboard", error: err });
  }
};

exports.saveHighscore = async (req, res) => {
  try {
    const map = await Map.findOne({ name: req.body.mapName });

    if (!map) {
      return res.status(404).json({ message: "Map not found" });
    }

    if (!map.highscores) {
      console.log("Highscores field is undefined, initializing...");
      map.highscores = [];
    }

    const newHighscore = {
      username: req.body.username,
      highscore: req.body.highscore,
    };

    map.highscores.push(newHighscore);

    map.highscores.sort((a, b) => a.highscore - b.highscore);
    map.highscores = map.highscores.slice(0, 10);

    await map.save();

    res.status(200).json({
      message: "Highscore saved successfully",
      highscores: map.highscores,
    });
  } catch (error) {
    console.error("Error saving highscore:", error);
    res.status(500).json({ message: "Error saving highscore", error });
  }
};
