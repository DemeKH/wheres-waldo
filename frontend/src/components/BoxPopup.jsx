const imagesToGuess = [
  "https://firebasestorage.googleapis.com/v0/b/wheres-waldo-74fe1.appspot.com/o/game-1%2Fcharacters%2Fraft-man.png?alt=media&token=0ec1ef07-2511-4001-a3d9-96ee14248598",
  "https://firebasestorage.googleapis.com/v0/b/wheres-waldo-74fe1.appspot.com/o/game-1%2Fcharacters%2Fwizard.png?alt=media&token=efbb508b-4cce-432d-920c-50297f9565e6",
  "https://firebasestorage.googleapis.com/v0/b/wheres-waldo-74fe1.appspot.com/o/game-1%2Fcharacters%2Fdragon.png?alt=media&token=41009fe7-4cde-4534-bc2f-0e3b79a125c7",
];

const BoxPopup = ({ boxPosition }) => {
  return (
    <div
      className="absolute text-white bg-black font-bold border-2 border-black p-2 rounded-lg"
      style={{
        top: `${boxPosition.y}px`,
        left: `${boxPosition.x}px`,
      }}
    >
      {imagesToGuess.map((img, index) => (
        <button key={index} className="flex items-center gap-1">
          <img src={`${img}`} className="w-10 h-10 rounded-lg m-1" />
          <h1 className="text-sm">Charachter</h1>
        </button>
      ))}
    </div>
  );
};

export default BoxPopup;
