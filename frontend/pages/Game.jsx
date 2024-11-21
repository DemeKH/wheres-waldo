import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import BoxPopup from "../src/components/BoxPopup";
import HeaderGame from "../src/components/HeaderGame";

function Game() {
  let { id } = useParams();
  const [map, setMap] = useState({});
  const [boxPosition, setBoxPosition] = useState(null);
  const [timeInMS, settimeInMS] = useState(0);

  useEffect(() => {
    const handleClick = (e) => {
      if (boxPosition !== undefined) {
        setBoxPosition(undefined);
      } else {
        setBoxPosition({ x: e.layerX, y: e.layerY });
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [boxPosition]);

  useEffect(() => {
    async function getMap() {
      const res = await axiosInstance.get(
        `http://localhost:3000/api/maps/${id}`
      );

      setMap(res.data.map);
    }
    getMap();
  }, [id]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      settimeInMS((prev) => prev + 1000);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <>
      <HeaderGame characters={map.characters} timeInMS={timeInMS} />
      <div className="relative overflow-auto max-w-screen">
        <div
          className="flex justify-center md:justify-between gap-4 
        md:top-10 flex-wrap md:flex-row right-0 z-20 md:z-40"
        >
          <img
            src={`${map.imageURL}`}
            className="w-full h-full object-cover mt-16"
            alt={`Game ${id} Image`}
          />
        </div>
        {boxPosition && (
          <BoxPopup boxPosition={boxPosition} characters={map.characters} />
        )}
      </div>
    </>
  );
}

export default Game;
