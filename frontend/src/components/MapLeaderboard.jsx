function formatTime(ms) {
  const minutes = Math.floor(ms / 60000); // 1 minute = 60000 milliseconds
  const seconds = Math.floor((ms % 60000) / 1000); // Remainder seconds

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

const initialData = [
  {
    username: "Demetre",
    highscore: 200000,
  },
  {
    username: "Ana",
    highscore: 100000,
  },
  {
    username: "Inga",
    highscore: 400000,
  },
  {
    username: "Tariel",
    highscore: 30000,
  },
  {
    username: "Demetre",
    highscore: 200000,
  },
  {
    username: "Ana",
    highscore: 100000,
  },
  {
    username: "Inga",
    highscore: 400000,
  },
  {
    username: "Tariel",
    highscore: 30000,
  },
  {
    username: "Demetre",
    highscore: 200000,
  },
  {
    username: "Ana",
    highscore: 100000,
  },
  {
    username: "Inga",
    highscore: 400000,
  },
  {
    username: "Tariel",
    highscore: 30000,
  },
];

const MapLeaderboard = ({ map, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-gray-800 rounded-md p-6 flex flex-col  gap-3 w-3/4 h-3/4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold"
        >
          &times;
        </button>

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
          {initialData.map((user, index) => (
            <div key={index} className="flex justify-between w-full">
              <h1 className="text-white text-xl">{index + 1}.</h1>
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
};

export default MapLeaderboard;
