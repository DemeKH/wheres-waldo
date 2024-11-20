import MapItem from "../src/components/MapItem";

const images = [
  "/src/assets/img1.webp",
  "/src/assets/img2.webp",
  "/src/assets/img3.webp",
];

const Home = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold">Choose a Map</h1>
      <div
        className="flex flex-col gap-5 p-5 justify-center items-center 
      lg:flex-row lg:justify-between lg:items-center"
      >
        {images.map((img, index) => (
          <MapItem bgImage={img} key={index} />
        ))}
      </div>
    </>
  );
};

export default Home;
