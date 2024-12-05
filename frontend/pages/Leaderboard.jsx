import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderHome from "../src/components/HeaderHome";
import MapItem from "../src/components/MapItem";
import MapLeaderboard from "../src/components/MapLeaderboard";

const Leaderboard = ({ maps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mapId, setMapId] = useState(null);

  function openModal(index) {
    setIsModalOpen(true);
    setMapId(index);
  }

  return (
    <>
      <HeaderHome />
      <h1 className="text-center text-2xl font-semibold">Choose a Map</h1>
      <div
        className="flex flex-col gap-5 p-5 justify-center items-center 
        lg:flex-row lg:justify-between lg:items-center"
      >
        {maps.map((map, index) => (
          <Link
            key={index}
            className="w-full flex justify-center"
            onClick={() => openModal(index)}
          >
            <MapItem bgImage={map.imageURL} mapName={map.name} key={index} />
          </Link>
        ))}
        {isModalOpen && (
          <MapLeaderboard
            map={maps[mapId]}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default Leaderboard;
