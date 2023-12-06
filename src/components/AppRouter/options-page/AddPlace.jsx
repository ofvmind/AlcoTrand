import { useState } from "react";
import { Link } from "react-router-dom";
import defaultImagePlace from "../../../images/places/1646943847_3-abrakadabra-fun-p-oboi-na-telefon-s-alkogolem-4.jpg";
import defaultMusicPlace from "../../../music/places/default.mp3";
import { v4 } from "uuid";

export const AddPlace = ({ setOptionVar, places, setPlaces }) => {
  const [place, setPlace] = useState("");
  console.log(places)
  const add = () => {
    if (place) {
      setPlaces( places.concat({
        id: v4(),
        image: defaultImagePlace,
        place: place,
        music: defaultMusicPlace,
        included: true
      }))

      setPlace("");
    }
  };

  return (
    <div className="options__bar">
      <p>Додати місце</p>
      <input
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      {place && <button className="btn" onClick={add}>Додати</button>}
      <button className="btn" onClick={() => setOptionVar("")}>Повернутись</button>
    </div>
  );
};
