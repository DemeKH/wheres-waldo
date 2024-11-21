import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import MapItem from "../src/components/MapItem";
import HeaderHome from "../src/components/HeaderHome";

const Home = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    async function getMaps() {
      const res = await axiosInstance.get("http://localhost:3000/api/maps/");

      setMaps(res.data.maps);
    }
    getMaps();
  }, []);

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
            to={`/game/${index + 1}`}
            key={index}
            className="w-full flex justify-center"
          >
            <MapItem bgImage={map.imageURL} mapName={map.name} key={index} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
