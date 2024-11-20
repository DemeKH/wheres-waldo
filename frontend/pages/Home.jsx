import { Link } from "react-router-dom";
import MapItem from "../src/components/MapItem";
import HeaderHome from "../src/components/HeaderHome";

const images = [
  "https://spy-scout.vercel.app/images/universe11-infested.jpeg",
  "https://firebasestorage.googleapis.com/v0/b/wheres-waldo-74fe1.appspot.com/o/game-1%2Fbackground%2Fdragon-charmers-island.webp?alt=media&token=9b698d26-a9ad-45c4-aa42-926ef9500de6",
  "https://alejandrovela-dev.github.io/robot-city/static/media/main-robotcity.21aef22c39fb3661f853.webp",
];

const Home = () => {
  return (
    <>
      <HeaderHome />
      <h1 className="text-center text-2xl font-semibold">Choose a Map</h1>
      <div
        className="flex flex-col gap-5 p-5 justify-center items-center 
      lg:flex-row lg:justify-between lg:items-center"
      >
        {images.map((img, index) => (
          <Link
            to={`/game/${index + 1}`}
            key={index}
            className="w-full flex justify-center"
          >
            <MapItem bgImage={img} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
