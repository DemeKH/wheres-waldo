import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000); // 1 minute = 60000 milliseconds
  const seconds = Math.floor((ms % 60000) / 1000); // Remainder seconds

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

const MapLeaderboard = ({ map, onClose }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true); // Initial loading state

  useEffect(() => {
    async function getLeaderboard(mapName) {
      try {
        const res = await axiosInstance.get(
          `/api/maps/get-leaderboard/${mapName}`
        );

        setLeaderboard(res.data.data.leaderboard);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      }
    }
    if (map.name) {
      getLeaderboard(map.name);
    }
  }, [map.name]);

  if (!loading && leaderboard.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-gray-800 rounded-md flex justify-center items-center w-3/4 h-3/4">
          <Link
            to="/leaderboard"
            onClick={onClose}
            className="absolute top-2 right-2 text-white text-2xl font-bold"
          >
            &times;
          </Link>
          <h1 className="text-white text-6xl">No Scores Yet!!!</h1>
        </div>
      </div>
    );
  }

  if (!loading && leaderboard.length > 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-gray-800 rounded-md p-6 flex flex-col  gap-3 w-3/4 h-3/4">
          <Link
            to="/leaderboard"
            onClick={onClose}
            className="absolute top-2 right-2 text-white text-2xl font-bold"
          >
            &times;
          </Link>

          <h1 className="text-3xl text-white w-full text-center p-2">
            Leaderboard for {map.name}
          </h1>
          <div className="w-full">
            <div className="flex justify-between w-full">
              <h1 className="text-white text-xl">Place</h1>
              <h1 className="text-white text-xl">Name</h1>
              <h1 className="text-white text-xl">Score</h1>
            </div>
            <hr className="w-full my-1" />
            {leaderboard.map((user, index) => (
              <div key={index} className="flex justify-between w-full">
                {index + 1 === 1 && (
                  <img src="/gold-medal.svg" className="w-10 h-10" />
                )}
                {index + 1 === 2 && (
                  <img src="/silver-medal.svg" className="w-10 h-10" />
                )}
                {index + 1 === 3 && (
                  <img src="/bronze-medal.svg" className="w-10 h-10" />
                )}
                {index + 1 > 3 && (
                  <h1 className="text-white text-xl w-10 h-10 text-center">
                    {index + 1}.
                  </h1>
                )}
                <h1 className="text-white text-xl">{user.username}</h1>
                <h1 className="text-white text-xl">
                  {formatTime(user.highscore)}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default MapLeaderboard;
