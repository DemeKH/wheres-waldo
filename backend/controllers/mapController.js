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
