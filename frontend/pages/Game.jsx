import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import BoxPopup from "../src/components/BoxPopup";

function Game() {
  let { id } = useParams();
  const [map, setMap] = useState({});
  const [boxPosition, setBoxPosition] = useState(null);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (boxPosition !== undefined) {
        setBoxPosition(undefined);
      } else {
        setBoxPosition({ x: e.layerX, y: e.layerY });
      }
    });
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

  return (
    <div className="relative overflow-auto max-w-screen">
      <div
        className="flex justify-center md:justify-between gap-4 
        md:top-10 flex-wrap md:flex-row right-0 z-20 md:z-40"
      >
        <img
          src={`${map.imageURL}`}
          className="w-full h-full object-cover"
          alt={`Game ${id} Image`}
        />
      </div>
      {boxPosition && <BoxPopup boxPosition={boxPosition} />}
    </div>
  );
}

export default Game;
