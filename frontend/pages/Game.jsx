import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import BoxPopup from "../src/components/BoxPopup";
import HeaderGame from "../src/components/HeaderGame";
import SaveUser from "../src/components/SaveUser";

function Game({ maps }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [map, setMap] = useState(maps[id - 1]);
  const [boxPosition, setBoxPosition] = useState(undefined);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [timeInMS, settimeInMS] = useState(0);

  const imageRef = useRef(null);

  useEffect(() => {
    async function getMapById() {
      try {
        const res = await axiosInstance.get(`/api/maps/${id}`);
        setMap(res.data.map);
      } catch (error) {
        console.error("Error fetching map data:", error);
      }
    }

    if (!maps || maps.length === 0 || !map) {
      getMapById();
    }
  }, [id, maps, map]);

  function guessCharacter(name) {
    const character = map.characters.filter(
      (character) => character.name === name
    );

    // const { x, y } = character[0].location;
    const imageWidth = imageRef.current.getBoundingClientRect().width;
    const imageHeight = imageRef.current.getBoundingClientRect().height;
    console.log(imageWidth, imageHeight);
    const x = (character[0].location.x / 1920) * imageWidth;
    const y = (character[0].location.y / 2710) * imageHeight + 30;
    console.log(x, y);

    if (
      boxPosition.x > x + 30 ||
      boxPosition.x < x - 30 ||
      boxPosition.y > y + 30 ||
      boxPosition.y < y - 30
    ) {
      return;
    } else {
      setCorrectGuesses((prev) => [...prev, name]);
    }
  }

  async function handleSave(username) {
    try {
      await axiosInstance.post("/api/maps/save-highscore", {
        username,
        highscore: timeInMS,
        mapName: map.name,
      });
      navigate("/leaderboard");
    } catch (error) {
      console.error("Error saving user:", error);
    }
  }

  useEffect(() => {
    const handleClick = (e) => {
      if (boxPosition !== undefined) {
        setBoxPosition(undefined);
      } else {
        setBoxPosition({ x: e.layerX, y: e.layerY });
        console.log(e.layerX, e.layerY);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [boxPosition]);

  useEffect(() => {
    if (!map || !map.characters) return;

    const intervalID = setInterval(() => {
      settimeInMS((prev) => prev + 1000);
    }, 1000);

    if (correctGuesses.length === map?.characters?.length) {
      clearInterval(intervalID);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [correctGuesses, map]);

  if (map) {
    return (
      <div className="bg-inherit flex flex-col h-full">
        <HeaderGame
          characters={map.characters}
          timeInMS={timeInMS}
          correctGuesses={correctGuesses}
        />
        <main style={{ flexGrow: "1" }}>
          <div className="relative overflow-hidden flex justify-center">
            <img
              ref={imageRef}
              src={`${map.imageURL}`}
              className="mt-16 cursor-crosshair max-w-full"
              alt={`Game ${id} Image`}
            />

            {boxPosition &&
              correctGuesses?.length !== map?.characters?.length && (
                <BoxPopup
                  boxPosition={boxPosition}
                  characters={map.characters}
                  guessCharacter={guessCharacter}
                  correctGuesses={correctGuesses}
                />
              )}
            {correctGuesses?.length === map?.characters?.length && (
              <SaveUser timeInMS={timeInMS} handleSave={handleSave} />
            )}
          </div>
        </main>
        <footer className="w-full flex justify-center h-[50px] p-4 bg-gray-800 text-white text-xl self-end">
          GitHub: DemeKH
        </footer>
      </div>
    );
  }
}

export default Game;
