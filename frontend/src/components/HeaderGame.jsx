import { Link } from "react-router-dom";

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000); // 1 minute = 60000 milliseconds
  const seconds = Math.floor((ms % 60000) / 1000); // Remainder seconds

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

const HeaderGame = ({ characters = [], timeInMS, correctGuesses }) => {
  return (
    <div className="flex justify-between items-center fixed p-3.5 bg-gray-800 z-10 w-full">
      <Link to="/" className="hidden sm:block mr-3">
        <h1 className="text-2xl text-white font-semibold">
          Where&apos;s Waldo
        </h1>
      </Link>
      <h1 className="text-lg md:text-xl text-white font-medium">
        {formatTime(timeInMS)}
      </h1>
      <div className="flex gap-2">
        {characters.map((character, index) => (
          <div
            className="flex justify-center items-center md:gap-1 rounded-md p-1 "
            key={index}
            style={{
              backgroundColor: correctGuesses.includes(character.name)
                ? "rgb(44, 145, 0)"
                : "black",
            }}
          >
            <img
              src={character?.imageURL}
              className="w-7 h-7 md:w-10 md:h-10 rounded-lg m-1 hover:scale-110 ease-in-out duration-100"
            />
            <h1 className="text-sm md:text-lg text-white font-medium">
              {character?.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderGame;
