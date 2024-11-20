const MapItem = ({ bgImage }) => {
  return (
    <div
      className="flex justify-center items-center w-full 
      bg-cover bg-center border border-black rounded-lg 
      p-3 h-72 max-w-80 md:max-w-md lg:max-w-full cursor-pointer"
      style={{ backgroundImage: `url('${bgImage}')` }}
    ></div>
  );
};

export default MapItem;
