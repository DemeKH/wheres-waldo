import { Link } from "react-router-dom";
import MapItem from "../src/components/MapItem";
import HeaderHome from "../src/components/HeaderHome";

const Home = ({ maps }) => {
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
            // stopPropagation to fix Game page having boxPopup on initial load
            onClick={(e) => e.stopPropagation()}
          >
            <MapItem bgImage={map.imageURL} mapName={map.name} key={index} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
