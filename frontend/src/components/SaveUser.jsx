import { useState } from "react";

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000); // 1 minute = 60000 milliseconds
  const seconds = Math.floor((ms % 60000) / 1000); // Remainder seconds

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

const SaveUser = ({ timeInMS, handleSave }) => {
  const [username, setUsername] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 rounded-md p-6 flex flex-col justify-center items-center gap-3">
        <h1 className="text-2xl text-white w-full text-center">
          Congrats, You finished in {formatTime(timeInMS)}
        </h1>
        <h1 className="text-xl text-white w-full text-center">
          Save your score!!!
        </h1>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleSave(username);
          }}
        >
          <div className="flex gap-2">
            <label htmlFor="username" className="text-white text-lg">
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-black rounded-md text-lg px-1 focus:outline-none"
            />
          </div>
        </form>
        <button
          className="bg-white px-3 py-1 rounded-md font-medium border border-black"
          onClick={() => handleSave(username)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SaveUser;
