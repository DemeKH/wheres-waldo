import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BoxPopup from "../src/components/BoxPopup";

const images = [
  "https://spy-scout.vercel.app/images/universe11-infested.jpeg",
  "https://firebasestorage.googleapis.com/v0/b/wheres-waldo-74fe1.appspot.com/o/game-1%2Fbackground%2Fdragon-charmers-island.webp?alt=media&token=9b698d26-a9ad-45c4-aa42-926ef9500de6",
  "https://alejandrovela-dev.github.io/robot-city/static/media/main-robotcity.21aef22c39fb3661f853.webp",
];

function Game() {
  let { id } = useParams();

  const [boxPosition, setBoxPosition] = useState(null);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (boxPosition !== undefined) {
        setBoxPosition(undefined);
      } else {
        setBoxPosition({ x: e.clientX, y: e.clientY });
      }
    });
  }, [boxPosition]);

  return (
    <div className="relative overflow-auto max-w-screen">
      <div
        className="flex justify-center md:justify-between gap-4 
        md:top-10 flex-wrap md:flex-row right-0 z-20 md:z-40"
      >
        <img
          src={`${images[id - 1]}`}
          className="w-full h-full object-cover"
          alt={`Game Image ${id}`}
        />
      </div>
      {boxPosition && <BoxPopup boxPosition={boxPosition} />}
    </div>
  );
}

export default Game;
