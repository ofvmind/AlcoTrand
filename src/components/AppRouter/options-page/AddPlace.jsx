import { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../places/places";
import defaultMusicPlace from "../../../music/places/default.mp3";
import { v4 } from "uuid";


export const AddPlace = ({ setOptionVar, places, setPlaces }) => {
  const [place, setPlace] = useState("");
  
  const getRandomImage = () => {
    return Math.floor(Math.random() * images.length);
  };

  const add = () => {
    if (place) {
      setPlaces( places.concat({
        id: v4(),
        image: images[getRandomImage()],
        place: place,
        music: defaultMusicPlace,
        included: true
      }))

      setPlace("");
    }
  };

  return (
    <div className="options__bar">
      <input
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        placeholder="Ваще місце"
      />
      {place && <button className="btn" onClick={add}>Додати</button>}
      <button className="btn" onClick={() => setOptionVar("")}>Повернутись</button>
    </div>
  );
};
