const BoxPopup = ({
  boxPosition,
  characters,
  guessCharacter,
  correctGuesses,
}) => {
  return (
    <div
      className="absolute flex flex-col gap-1 text-white bg-black font-bold border-2 border-black p-2 rounded-lg"
      style={{
        top: `${boxPosition.y}px`,
        left: `${boxPosition.x}px`,
      }}
    >
      {characters.map((character, index) => (
        <button
          key={index}
          className="flex items-center gap-1 w-full rounded-md"
          style={{
            backgroundColor: correctGuesses.includes(character.name)
              ? "green"
              : "black",
          }}
          onClick={() => guessCharacter(character.name)}
        >
          <img
            src={`${character.imageURL}`}
            className="w-10 h-10 rounded-lg m-1"
          />
          <h1 className="text-sm">{character.name}</h1>
        </button>
      ))}
    </div>
  );
};

export default BoxPopup;
