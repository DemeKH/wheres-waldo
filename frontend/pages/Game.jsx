import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

    const { x, y } = character[0].location;
    if (
      boxPosition.x > x + 20 ||
      boxPosition.x < x - 20 ||
      boxPosition.y > y + 20 ||
      boxPosition.y < y - 20
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
      console.log("User saved successfully!");
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
      <>
        <HeaderGame
          characters={map.characters}
          timeInMS={timeInMS}
          correctGuesses={correctGuesses}
        />
        <div className="relative overflow-auto max-w-screen">
          <div
            className="flex justify-center md:justify-between gap-4 
        md:top-10 flex-wrap md:flex-row right-0 z-20 md:z-40"
          >
            <img
              src={`${map.imageURL}`}
              className="w-auto h-auto object-cover mt-16"
              alt={`Game ${id} Image`}
            />
          </div>
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
      </>
    );
  }
}

export default Game;
