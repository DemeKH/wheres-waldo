const textStyle = {
  textShadow:
    "-1px -1px 0 #222, 1px -1px 0 #222, -1px 1px 0 #222, 1px 1px 0 #222",
};

const MapItem = ({ bgImage, mapName }) => {
  return (
    <div
      className="flex justify-center items-center w-full 
      bg-cover bg-center border border-black rounded-lg 
      p-3 h-72 max-w-80 md:max-w-md lg:max-w-full"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <h1 className="text-white font-semibold text-3xl" style={textStyle}>
        {mapName}
      </h1>
    </div>
  );
};

export default MapItem;
